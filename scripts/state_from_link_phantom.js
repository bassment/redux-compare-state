const system = require('system');
const webPage = require('webpage');
const fs = require('fs');
const page = webPage.create();
const args = system.args;
const link = args[1];

console.log(link);

page.open(link, function(status) {
    try {
        const STATE_VARIABLE = system.env.STATE_VARIABLE;
        const SNAPSHOT = system.env.SNAPSHOT;
        const state = page.evaluate(function(s) {
            return window[s];
        }, STATE_VARIABLE);
        const destination = SNAPSHOT ? 'data/snapshot.js' : 'data/new_state.js';
        fs.write(destination, 'module.exports=' + JSON.stringify(state), 'w');
        console.log(status.toUpperCase());
    } catch (err) {
        console.error(err);
    }
    phantom.exit();
});
