const fs = require("fs");
const puppeteer = require("puppeteer");

let mailRegex = /([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9_-]+)/g;

// const companyUrl = "https://www.disys.com";
const csvToJson = require("csvtojson");

let companyJsons = [];

const processRecipients = async () => {
  companyJsons = await csvToJson({
    trim: true,
  }).fromFile("./demo_website.csv");

  console.log(companyJsons);
};

const scrape = async (companyUrl) => {
  try {
    console.log("===========================START===========================");
    console.log(`Scraping for ${companyUrl}.`);
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
      headless: true,
      args: ["no-sandbox", "disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // * goto a page url
    await page.goto(companyUrl);

    // * find all href values
    let hrefs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("a[href]"), (a) =>
        a.getAttribute("href")
      );
    });

    console.log(`FOUND ${hrefs.length} paths to goto.`);

    let i = 1;
    const totalHrefs = hrefs.length;

    // * store found mails here, with key being company url
    let foundMails = [];

    // * mails may be present on home page also, so first check here then in rest hrefs
    console.log("First Checking in homepage");

    // * goto a page url
    await page.goto(companyUrl);
    const body = await page.evaluate(() => document.body.innerHTML);
    let mails = Array.from(body.toString().matchAll(mailRegex), (x) => x[0]);
    console.log(`Mails found: `, mails);

    foundMails = foundMails.concat(mails);

    for (let href of hrefs) {
      console.log(`Visiting ${companyUrl}/${href}, ${i++}/${totalHrefs}.`);

      await page.goto(`${companyUrl}/${href}`);

      const body = await page.evaluate(() => document.body.innerHTML);

      let mails = Array.from(body.toString().matchAll(mailRegex), (x) => x[0]);

      console.log(`Mails found: `, mails);
      foundMails = foundMails.concat(mails);
    }

    // * writing found mails to file

    // * reading previous results from file
    let content = fs.readFileSync("./foundMails.json", "utf-8");

    // * If content present,parse it
    if (content) content = JSON.parse(content);
    // console.log("Content: ", content);

    foundMails = new Set(foundMails);
    foundMails = Array.from(foundMails);

    // * create new json with new found mails and with previous results stored in file
    const result = {
      ...content,
      [companyUrl]: foundMails,
    };

    // * write it to the file
    fs.writeFileSync("./foundMails.json", JSON.stringify(result, null, 4));
    console.log(`Finished.`);
    console.log("===========================START===========================");
  } catch (err) {
    console.log(`Error while running: ${err.message}.`);
  }
};

const main = async () => {
  console.log("In main function...");
  await processRecipients();
  console.log("COMPANY JSONS: ", companyJsons);
  for (let companyJson of companyJsons) {
    await scrape(companyJson.company_url);
    // console.log(companyJson);
  }
};

main();
