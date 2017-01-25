const {readdirSync} = require('fs');
const {resolve} = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const nodeModules = {};

readdirSync(resolve(__dirname, '..', 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = function(env = {}) {
    const {isProd} = env;
    return merge(commonConfig('tsconfig.json'), {
        entry: {
            app: resolve(__dirname, '..', 'application', 'index.ts')
        },
        output: resolveOutput(isProd),
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
};

function resolveOutput(isProd) {
    const base = {
        path: resolve(__dirname, '..', 'target'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs'
    };
    if (isProd) {
        return base;
    }
    return Object.assign(base, {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    });
}
