import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const outDir = "./scripts/mobile";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

const scrollPositions = [0, 800, 1400, 2200, 3200, 4200, 5200, 6200, 7000, 7800];
for (let i = 0; i < scrollPositions.length; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollPositions[i]);
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${outDir}/section-${i}.png` });
  console.log(`✓ section-${i} at scroll ${scrollPositions[i]}`);
}

await browser.close();
console.log("Done.");
