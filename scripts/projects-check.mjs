import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const outDir = "./scripts/projects-check";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

for (const vp of [{ name: "desktop", w: 1440, h: 900 }, { name: "mobile", w: 390, h: 844 }]) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.w, height: vp.h, deviceScaleFactor: 2 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.evaluate(() => document.getElementById("projects")?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: `${outDir}/${vp.name}.png`, fullPage: false });
  await page.close();
  console.log(`✓ ${vp.name}`);
}

await browser.close();
