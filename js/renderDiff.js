const snapshot = require('../data/snapshot.js');
const newState = require('../data/new_state.js');
const deepKeys = require('./deepKeys.js');

const left = deepKeys(snapshot);
const right = deepKeys(newState);
const onlyKeys = jsondiffpatch.diff(left, right);
const withValues = jsondiffpatch.diff(snapshot, newState);

// beautiful html diff
document.getElementById('visual').innerHTML = onlyKeys !== undefined
    ? jsondiffpatch.formatters.html.format(onlyKeys, left) : 'No changes!';
jsondiffpatch.formatters.html.hideUnchanged();

document.getElementById('annotated').innerHTML = withValues !== undefined
    ? jsondiffpatch.formatters.html.format(withValues, snapshot) : 'No changes!';
jsondiffpatch.formatters.html.hideUnchanged();

// self-explained json
// document.getElementById('annotated').innerHTML = jsondiffpatch.formatters.annotated.format(delta, left);
