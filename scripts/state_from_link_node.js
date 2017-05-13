const path = require("path");
const util = require("util");
const http = require("http");
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const link = process.argv[2];
const STATE_VARIABLE = process.env.STATE_VARIABLE;
const SNAPSHOT = process.env.SNAPSHOT;

console.log(`Grabbing state from - ${link}`);

function checkDirExists(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  checkDirExists(dirname);
  fs.mkdirSync(dirname);
}

request(link, function(error, response, html){
    if(!error){
        const $ = cheerio.load(html);
        const neededScript = $('script').get()
            .filter(script => !script.attribs.src)
            .filter(script => script.children[0].data.includes(STATE_VARIABLE))
            .pop();
        const window = neededScript ? neededScript.children[0].data : null;
        const jsState = eval(window);
        const state = JSON.stringify(jsState);
        const destination = SNAPSHOT ? 'data/snapshot.js' : 'data/new_state.js';
        checkDirExists(destination);
        const additionalComment = jsState
            ? '\nFile with state is successfully created!'
            : '\nUnfortunetly you don\'t have any redux state on your webpage.'
        fs.writeFile(destination, `module.exports=${state}`, (err) => !err
            ? console.log(additionalComment)
            : console.error(err)
        )
    } else {
        console.error(error);
    }
})
