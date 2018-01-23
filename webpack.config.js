var path = require('path');
var webpack = require('webpack');
     
 module.exports = {
     entry: './app.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015','stage-0', 'react']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     externals: {
         'cheerio': 'window',
         'react/addons': true,
         'react/lib/ExecutionEnvironment': true,
         'react/lib/ReactContext': true
     }
 };
