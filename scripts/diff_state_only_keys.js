const deepKeys = require('../js/deepKeys.js');
const snapshot = require('../data/snapshot.js');
const newState = require('../data/new_state.js');
const jsondiffpatch = require('jsondiffpatch');

const left = deepKeys(snapshot);
const right = deepKeys(newState);

const delta = jsondiffpatch.diff(left, right);
delta ? jsondiffpatch.formatters.console.log(delta) : console.log('No changes!');
