import * as webpack from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

import { promisify } from 'util';
import { readdir } from 'fs';
import { resolve } from 'path';

import { IEnvironment } from '../environment/IEnvironment';

const CLIENT_PATH = resolve(__dirname, '..', 'client');

export async function prepareConfig(env: IEnvironment): Promise<webpack.Configuration> {

    const entry = await getEntries();

    return {
        entry: entry,
        output: getOutput(env),
        target: 'web',
        devtool: env.envname !== 'dev' ? undefined : 'source-map',
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: getRules(env)
        },
        plugins: getPlugins(env)
    };
}

async function getEntries() {
    const newReaddir = promisify(readdir);

    const files = await newReaddir(CLIENT_PATH);

    return files
        .filter(f => !f.endsWith('.json'))
        .reduce((p, c) => {
            p[c] = resolve(CLIENT_PATH, c, 'index.ts');
            return p;
        }, {});
}

function getOutput(env): webpack.Output {

    const output: webpack.Output = {
        path: resolve(__dirname, '..', 'public', 'generated'),
        publicPath: env.publicPath
    };

    if (env.envname !== 'dev') {
        output.filename = '[hash].[name].bundle.js';
    } else {
        output.filename = '[name].bundle.js';
    }

    return output;
}

function getRules(env) {

    const rules = [];

    rules.push({
        test: /\.ts$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    configFileName: resolve(__dirname, '..', 'client', 'tsconfig.client.json')
                }
            },
            {
                loader: 'tslint-loader',
                options: {
                    typeCheck: true
                }
            }
        ],
        exclude: /node_modules/
    });

    if (env.envname !== 'dev') {
        rules.push({
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader?minimize=true'
            }),
            exclude: /node_modules/
        });
    } else {
        rules.push({
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            }),
            exclude: /node_modules/
        });
    }
    return rules;
}

function getPlugins(env: IEnvironment) {

    const plugins = [];

    plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: ({ resource }) => (
            resource &&
            resource.indexOf('node_modules') >= 0 &&
            resource.match(/\.js$/)
        )
    }));

    if (env.envname === 'dev') {
        plugins.push(
            new ExtractTextPlugin({
                filename: '[name].css',
                disable: false,
                allChunks: true
            })
        );
    } else {
        plugins.push(
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
                    NODE_ENV: '"' + env.envname + '"'
                }
            }),
            function () {
                this.plugin('done', function (stats) {
                    require('fs').writeFileSync(
                        resolve(__dirname, '..', 'public', 'stats.json'),
                        JSON.stringify(stats.toJson(), null, 4));
                });
            }
        );
    }

    return plugins;
}

