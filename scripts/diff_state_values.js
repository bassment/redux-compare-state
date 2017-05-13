const snapshot = require('../data/snapshot.js');
const newState = require('../data/new_state.js');
const jsondiffpatch = require('jsondiffpatch');

const delta = jsondiffpatch.diff(snapshot, newState);
delta ? jsondiffpatch.formatters.console.log(delta) : console.log('No changes!');
