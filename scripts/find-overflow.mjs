import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto("http://localhost:3001", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

const overflowingElements = await page.evaluate(() => {
  const results = [];
  const docWidth = document.documentElement.scrollWidth;
  const viewWidth = window.innerWidth;
  
  if (docWidth <= viewWidth) {
    return ["No horizontal overflow detected"];
  }

  document.querySelectorAll("*").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.right > viewWidth + 5 || rect.left < -5) {
      const tag = el.tagName;
      const cls = el.className?.toString?.().slice(0, 60) || "";
      const id = el.id || "";
      const width = Math.round(rect.width);
      const right = Math.round(rect.right);
      results.push(`${tag} id="${id}" class="${cls}" width=${width} right=${right}`);
    }
  });
  return results.slice(0, 20);
});

console.log(`Doc scrollWidth: ${await page.evaluate(() => document.documentElement.scrollWidth)}`);
console.log(`Viewport width: 390`);
console.log("\nOverflowing elements:");
overflowingElements.forEach(e => console.log(" -", e));

await browser.close();
