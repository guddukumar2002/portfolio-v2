import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const outDir = "./scripts/final-check";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

for (const vp of [
  { name: "desktop-1440", w: 1440, h: 900 },
  { name: "desktop-1280", w: 1280, h: 800 },
]) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.w, height: vp.h, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
  await new Promise(r => setTimeout(r, 2000));

  // projects section
  await page.evaluate(() => document.getElementById("projects")?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: `${outDir}/${vp.name}-projects.png` });

  // footer area
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: `${outDir}/${vp.name}-footer.png` });

  // project card dimensions
  const info = await page.evaluate(() => {
    const cards = document.querySelectorAll("#projects article");
    return Array.from(cards).map((c, i) => {
      const img = c.querySelector("div[style*='height']");
      return {
        card: i + 1,
        cardW: Math.round(c.getBoundingClientRect().width),
        cardH: Math.round(c.getBoundingClientRect().height),
        imgH: img ? Math.round(img.getBoundingClientRect().height) : 0,
      };
    });
  });
  console.log(`\n${vp.name} card info:`, JSON.stringify(info, null, 2));

  await page.close();
}

await browser.close();
console.log("\nDone.");
