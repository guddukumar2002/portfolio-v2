import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const outDir = "./scripts/about-debug";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

// scroll to about section
await page.evaluate(() => {
  const el = document.getElementById("about");
  if (el) el.scrollIntoView();
});
await new Promise(r => setTimeout(r, 800));

// take 4 screenshots scrolling through about
for (let i = 0; i < 4; i++) {
  await page.screenshot({ path: `${outDir}/about-${i}.png` });
  await page.evaluate(() => window.scrollBy(0, 600));
  await new Promise(r => setTimeout(r, 400));
}

// also get computed widths of about section children
const info = await page.evaluate(() => {
  const about = document.getElementById("about");
  if (!about) return "about section not found";
  const children = Array.from(about.querySelectorAll("*")).slice(0, 20);
  return children.map(el => ({
    tag: el.tagName,
    w: Math.round(el.getBoundingClientRect().width),
    h: Math.round(el.getBoundingClientRect().height),
    overflow: window.getComputedStyle(el).overflow,
    style: el.getAttribute("style")?.slice(0, 80) || "",
  }));
});

console.log(JSON.stringify(info, null, 2));
await browser.close();
