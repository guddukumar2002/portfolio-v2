import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const outDir = "./scripts/mobile-final";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

const sections = ["home", "about", "projects", "contact"];
for (const id of sections) {
  await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView(), id);
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: `${outDir}/${id}.png` });
  console.log(`✓ ${id}`);
}

// Also scroll through hero to see resume button
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: `${outDir}/hero-full.png` });

await browser.close();
console.log("Done.");
