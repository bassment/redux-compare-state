const system = require('system');
const webPage = require('webpage');
const fs = require('fs');
const page = webPage.create();
const args = system.args;
const link = args[1];

page.open(link, function(status) {
    const STATE_VARIABLE = system.env.STATE_VARIABLE;
    const SNAPSHOT = system.env.SNAPSHOT;
    const state = page.evaluate(function(s) {
        return window[s];
    }, STATE_VARIABLE);
    const destionation = SNAPSHOT ? 'data/snapshot.js' : 'data/new_state.js';
    fs.write(destionation, 'module.exports=' + JSON.stringify(state), 'w');
    console.log(status);
    phantom.exit();
});
