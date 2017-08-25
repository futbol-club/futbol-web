'use strict';

const args = require('yargs').argv;
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const appName = 'app';
const base = './';
const entryFile = path.resolve(__dirname, 'src/main.js');

const isProduction = args.prod;

let plugins = [
    new ExtractTextPlugin(
        isProduction ? '[name].[hash].css' : '[name].css'
    ),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: isProduction ? 'vendor.[hash].js' : 'vendor.js'
    }),
    new HTMLWebpackPlugin({
        template: 'src/index.html',
        chunks: ['app', 'vendor']
        // TODO: favicon: 'favicon.ico'
    })
];

if (isProduction) {
    plugins.push(
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false
        }),
        new webpack.optimize.OcurrenceOrderPlugin()
    );
}

module.exports = {
    entry: {
        app: [
            entryFile
        ],
        vendor: [
            'angular',
            '@uirouter/angularjs'
        ]
    },
    output: {
        chunkFilename: isProduction ? '[name].[hash].chunk.js' : '[name].chunk.js',
        filename: isProduction ? '[name].[hash].js' : '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                loader: 'html-loader',
                include: /src/,
                test: /\.html$/
            },
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js$/
            },
            {
                // TODO: Add scss
                loader: ExtractTextPlugin.extract('style', 'css-loader?sourceMap'),
                test: /\.css$/
            },
            {
                loader : 'file-loader?name=assets/fonts/[name].[ext]?[hash]',
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/
            },
            {
                loader: 'url-loader?limit=8192&name=assets/images/[name].[hash].[ext]',
                test: /\.(png|jpg)$/
            }
        ]
    },
    plugins: plugins,
    devtool: isProduction ? 'source-map' : 'eval-source-map'
};
