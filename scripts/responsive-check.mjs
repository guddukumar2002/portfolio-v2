import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const outDir = "./scripts/responsive";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const viewports = [
  { name: "mobile-375", width: 375, height: 812 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "tablet-1024", width: 1024, height: 768 },
  { name: "desktop-1280", width: 1280, height: 800 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

const sections = [
  { name: "hero", scrollY: 0 },
  { name: "stats-marquee", scrollY: 900 },
  { name: "about", scrollY: 1600 },
  { name: "experience", scrollY: 2600 },
  { name: "skills", scrollY: 3800 },
  { name: "projects", scrollY: 4800 },
  { name: "contact", scrollY: 7000 },
];

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

for (const vp of viewports) {
  console.log(`\n📱 ${vp.name} (${vp.width}x${vp.height})`);
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
  await new Promise(r => setTimeout(r, 1500));

  for (const sec of sections) {
    await page.evaluate((y) => window.scrollTo(0, y), sec.scrollY);
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `${outDir}/${vp.name}-${sec.name}.png` });
    console.log(`  ✓ ${sec.name}`);
  }
  await page.close();
}

await browser.close();
console.log("\nAll done.");
