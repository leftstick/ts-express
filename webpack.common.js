const {readdirSync} = require('fs');
const {resolve} = require('path');

const nodeModules = {};

readdirSync('node_modules')
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs2 ' + mod;
    });


module.exports = {
    entry: {
        app: resolve(__dirname, 'application', 'index.ts')
    },
    output: {
        path: resolve(__dirname, 'target'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    externals: nodeModules,
    node: {
        __dirname: true
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts!tslint',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    plugins: []
};
