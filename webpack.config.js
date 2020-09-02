const path = require('path'); //part of the Node library
const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
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
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html');
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i, //if file ends in .css, use the css-loader package
                use: ["style-loader", "css-loader?url=false", {loader: "postcss-loader", options: {plugins: postCSSPlugins}}]
            }
        ]
    }
};
