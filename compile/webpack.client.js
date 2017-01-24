const {resolve} = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const isProd = process.env.NODE_ENV === 'production';

module.exports = merge(commonConfig('tsconfig.client.json'), {
    entry: {
        home: resolve(__dirname, '..', 'application', 'static', 'home', 'main.ts')
    },
    output: {
        path: resolve(__dirname, '..', 'public', 'generated', 'js'),
        filename: (isProd ? '[hash].' : '') + '[name].bundle.js'
    },
    target: 'web',
    devtool: isProd ? undefined : 'source-map',
    plugins: isProd ? [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        function() {
            this.plugin('done', function(stats) {
                require('fs').writeFileSync(
                    resolve(__dirname, '..', 'public', 'generated', 'js', 'stats.json'),
                    JSON.stringify(stats.toJson().assetsByChunkName, null, 4));
            });
        }
    ] : []
});

