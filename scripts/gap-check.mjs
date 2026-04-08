import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise(r => setTimeout(r, 1500));

const info = await page.evaluate(() => {
  // Projects grid gap
  const grid = document.querySelector(".projects-grid");
  const gridStyle = grid ? window.getComputedStyle(grid).gap : "not found";

  // Project cards - get vertical distance between card 1 bottom and card 2 top
  const cards = document.querySelectorAll(".projects-grid article");
  let cardGap = "N/A";
  if (cards.length >= 3) {
    const r1 = cards[0].getBoundingClientRect();
    const r2 = cards[2].getBoundingClientRect(); // row 2 first card
    cardGap = Math.round(r2.top - r1.bottom) + "px";
  }

  // Experience items - paddingBottom
  const expItems = document.querySelectorAll("#experience [style*='paddingBottom']");
  const expPadding = expItems.length > 0 
    ? window.getComputedStyle(expItems[0]).paddingBottom 
    : "not found";

  // Distance between experience cards
  const expCards = document.querySelectorAll("#experience .motion-div, #experience [style*='border-radius: 20px']");
  let expGap = "N/A";
  if (expCards.length >= 2) {
    const r1 = expCards[0].getBoundingClientRect();
    const r2 = expCards[1].getBoundingClientRect();
    expGap = Math.round(r2.top - r1.bottom) + "px";
  }

  return { gridStyle, cardGap, expPadding, expGap };
});

console.log("Projects grid gap:", info.gridStyle);
console.log("Projects row gap (card1 bottom to card3 top):", info.cardGap);
console.log("Experience paddingBottom:", info.expPadding);
console.log("Experience card gap:", info.expGap);

await browser.close();
