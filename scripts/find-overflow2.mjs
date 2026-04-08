import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

const results = await page.evaluate(() => {
  const viewWidth = window.innerWidth;
  const found = [];

  document.querySelectorAll("*").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.right > viewWidth + 5) {
      const style = window.getComputedStyle(el);
      found.push({
        tag: el.tagName,
        width: Math.round(rect.width),
        right: Math.round(rect.right),
        left: Math.round(rect.left),
        inlineStyle: el.getAttribute("style")?.slice(0, 120) || "",
        parent: el.parentElement?.tagName + " " + (el.parentElement?.getAttribute("style") || "").slice(0, 80),
      });
    }
  });
  // dedupe by width+right
  const seen = new Set();
  return found.filter(f => {
    const key = `${f.width}-${f.right}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 15);
});

results.forEach(r => {
  console.log(`\n${r.tag} w=${r.width} right=${r.right} left=${r.left}`);
  console.log(`  style: ${r.inlineStyle}`);
  console.log(`  parent: ${r.parent}`);
});

await browser.close();
