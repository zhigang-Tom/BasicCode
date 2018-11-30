var webpcak = require('webpack');
var fs = require('fs')
var path = require('path')


var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // chunkFilename: 'ctrl/[name].js'
    },
    target: 'node',
    externals: nodeModules,
    context: __dirname,
    node: {
        __filename: false,
        __dirname: false
    }, 
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, "node_modules"),
            ],
            query: {
                plugins: ["transform-decorators-legacy",'transform-runtime'],
                presets: [ ["env", "commonjs"],"stage-2"],
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, '.')
        }
    },
    devtool:'#source-map'
}