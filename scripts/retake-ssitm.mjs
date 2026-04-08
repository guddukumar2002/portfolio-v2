import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });

// Disable cache
await page.setCacheEnabled(false);

console.log("Taking fresh screenshot of ssitm...");
await page.goto("https://ssitm.vercel.app/", { waitUntil: "networkidle2", timeout: 40000 });
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({ path: "./public/assets/screenshots/ssitm.png", clip: { x: 0, y: 0, width: 1280, height: 800 } });
await browser.close();

console.log("Done — ssitm.png updated.");
