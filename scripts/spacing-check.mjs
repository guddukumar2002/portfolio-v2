import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const outDir = "./scripts/spacing-check";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise(r => setTimeout(r, 1500));

for (const id of ["projects", "experience"]) {
  await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView(), id);
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${outDir}/${id}.png` });
  console.log(`✓ ${id}`);
}

await browser.close();
