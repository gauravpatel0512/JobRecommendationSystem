const fs = require("fs");

const csvToJson = require("csvtojson");

let companyJsons = [];

const processRecipients = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      companyJsons = await csvToJson({
        trim: true,
      }).fromFile("./demo_website.csv");

      console.log(companyJsons);
      console.log(companyJsons.length);

      for (let companyJson of companyJsons) {
        console.log(companyJson);

        const companyUrl = companyJson.company_url;

        let foundMails = {
          [companyUrl]: "abs",
        };

        console.log(foundMails);
        // fs.readFile(
        //   "foundMails.json",
        //   "utf8",
        //   function readFileCallback(err, data) {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       console.log("Date: ", data);
        //       let obj = JSON.parse(JSON.stringify(data || {})); //now it an object
        //       console.log(obj);
        //       obj = {
        //         ...obj,
        //         ...foundMails,
        //       };

        //       console.log(obj);
        //       let json = JSON.stringify(obj); //convert it back to json
        //       console.log(json);
        //       fs.writeFile("foundMails.json", json, "utf8", () => {}); // write it back
        //     }
        //   }
        // );

        let content = fs.readFileSync("./foundMails.json", "utf-8");

        if (content) content = JSON.parse(content);
        console.log("Content: ", content);

        const result = {
          ...content,
          ...foundMails,
        };

        fs.writeFileSync("./foundMails.json", JSON.stringify(result, null, 4));
      }
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
};

processRecipients();
