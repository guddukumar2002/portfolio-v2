import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const projects = [
  { name: "spl", url: "https://spl-tournament-up.vercel.app" },
  { name: "medgallery", url: "https://medical-gallery-xi.vercel.app" },
  { name: "seo-analyzer", url: "https://seo-analyzer-frontend-blue.vercel.app/" },
  { name: "ssitm", url: "https://ssitm.vercel.app/" },
];

const outDir = "./public/assets/screenshots";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });

for (const p of projects) {
  console.log(`Screenshotting ${p.name}...`);
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(p.url, { waitUntil: "networkidle2", timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: `${outDir}/${p.name}.png`, clip: { x: 0, y: 0, width: 1280, height: 800 } });
    await page.close();
    console.log(`  done: ${p.name}.png`);
  } catch (e) {
    console.log(`  failed: ${p.name} - ${e.message}`);
  }
}

await browser.close();
console.log("All done.");
