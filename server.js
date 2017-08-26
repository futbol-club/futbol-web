'use strict';

const config = require('./webpack.config.js');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
    contentBase: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: {
        cached: false,
        colors: true,
        chunk: false,
        modules: false
    }
}).listen(8080, 'localhost', (error) => {
    if (error) {
        console.log('ERROR: ', error);
    }

    console.log('OPEN: http://localhost:8080');
});
