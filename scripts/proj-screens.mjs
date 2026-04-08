import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const outDir = "./scripts/proj-screens";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

for (const vp of [
  { name: "mobile-390", w: 390, h: 844 },
  { name: "tablet-768", w: 768, h: 1024 },
  { name: "desktop-1280", w: 1280, h: 800 },
  { name: "desktop-1440", w: 1440, h: 900 },
]) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.w, height: vp.h, deviceScaleFactor: 2 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.evaluate(() => document.getElementById("projects")?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: `${outDir}/${vp.name}.png` });
  console.log(`✓ ${vp.name}`);
  await page.close();
}

await browser.close();
