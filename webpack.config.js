const path = require('path');
const webpack = require('webpack');

let currentVersion = require('./package.json').version;
let libraryName = require('./package.json').name;

module.exports = {
    context: path.resolve(__dirname, './lib'),
    entry: {
        index: "./index.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: `${libraryName}-${currentVersion}.js`,
        publicPath: '/dist',
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './src'), 'node_modules'
        ],
        alias: {
            core: path.resolve(__dirname, 'lib/core')
        },
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './client'),
    },
};