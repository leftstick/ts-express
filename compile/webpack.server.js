const {readdirSync} = require('fs');
const {resolve} = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const nodeModules = {};

readdirSync(resolve(__dirname, '..', 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs2 ' + mod;
    });

const isProd = process.env.NODE_ENV === 'production';

module.exports = merge(commonConfig, {
    entry: {
        app: resolve(__dirname, '..', 'application', 'index.ts')
    },
    output: resolveOutput(),
    target: 'node',
    externals: nodeModules,
    node: {
        __dirname: true
    },
    devtool: isProd ? undefined : 'source-map',
    plugins: isProd ? [new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    })] : []
});

function resolveOutput() {
    const base = {
        path: resolve(__dirname, '..', 'target'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs2'
    };
    if (isProd) {
        return base;
    }
    return Object.assign(base, {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    });
}
