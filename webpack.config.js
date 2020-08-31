const path = require('path'); //part of the Node library
const postCSSPlugins = [
    require("postcss-import"),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
    entry: './app/assets/images/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app') //absolute path
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i, //if file ends in .css, use the css-loader package
                use: ["style-loader", "css-loader?url=false", {loader: "postcss-loader", options: {plugins: postCSSPlugins}}]
            }
        ]
    }
};
