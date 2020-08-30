const path = require('path'); //part of the Node library

module.exports = {
    entry: './app/assets/images/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app') //absolute path
    },
    mode: 'development',
    watch: true
};
