const {resolve} = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common');


module.exports = function(env = {}) {
    const {isProd} = env;

    return merge(commonConfig('tsconfig.client.json'), {
        entry: {
            about: resolve(__dirname, '..', 'application', 'static', 'about', 'main.ts'),
            home: resolve(__dirname, '..', 'application', 'static', 'home', 'main.ts')
        },
        output: {
            path: resolve(__dirname, '..', 'public', 'generated'),
            filename: (isProd ? '[hash].' : '') + '[name].bundle.js',
            publicPath: '/generated/'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader' + (isProd ? '?minimize=true' : '')
                    }),
                    exclude: /node_modules/
                }
            ]
        },
        target: 'web',
        devtool: isProd ? undefined : 'source-map',
        plugins: isProd ? [
            new ExtractTextPlugin({
                filename: '[hash].[name].css',
                disable: false,
                allChunks: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            function() {
                this.plugin('done', function(stats) {
                    require('fs').writeFileSync(
                        resolve(__dirname, '..', 'public', 'stats.json'),
                        JSON.stringify(stats.toJson().assetsByChunkName, null, 4));
                });
            }
        ] : [
            new ExtractTextPlugin({
                filename: '[name].css',
                disable: false,
                allChunks: true
            })
        ]

    });
};
