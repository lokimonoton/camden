// const puppeteer = require('puppeteer');
const pulkam=require('./panda')
// async function masuk() {
//   const browser = await puppeteer.launch({headless:true});
//   const page = await browser.newPage();
//   await page.goto('http://treasurer.maricopa.gov/');
//   await page.screenshot({path: 'example.png'});

// console.log(semua)
//   await browser.close();
// };
// masuk()
const Chromy = require('chromy')

async function main () {
const semua=await pulkam.lihat()
console.log(semua)
  let chromy = new Chromy({launchBrowser:false,})
  await chromy.goto('http://example.com/')
  const result = await chromy.evaluate(() => {
          return document.querySelectorAll('*').length
        })
  console.log(result)
  await chromy.close()
}

main()
//create pdf
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
//   await page.pdf({path: 'hn.pdf', format: 'A4'});

//   await browser.close();
// })();