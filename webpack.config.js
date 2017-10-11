var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['./src/index.js', './src/style.css'],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader'
            },
            {
                test: /\.(gif|png|jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]&mimeType=image/[ext]&limit=100000'
            }
        ]
    },

    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
};
