const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './js/renderDiff.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new LiveReloadPlugin({
            appendScriptTag: true,
        })
    ]
};
