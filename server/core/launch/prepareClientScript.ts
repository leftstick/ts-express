import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackMiddleware from 'webpack-dev-middleware';
import { promisify } from 'util';
import { resolve } from 'path';
import { readFile } from 'fs';

import { prepareConfig } from '../../../build/webpack.config';

import { env } from '../environment';
import { assetInfo } from '../assets';

const config = env();

export async function prepareClientScript(app: express.Express): Promise<void> {
    if (config.envname === 'production') {
        const newReadFile = promisify(readFile);
        const stats = await newReadFile(resolve(__dirname, '..', '..', '..', 'public', 'stats.json'), { encoding: 'utf-8' });
        return assetInfo.setup(<webpack.Stats.ToJsonOptions>JSON.parse(stats));
    }

    const webpackConfig = await prepareConfig(config);

    const compiler = webpack(webpackConfig);

    compiler.apply(function () {
        this.plugin('done', (stats: webpack.Stats) => {
            assetInfo.setup(stats.toJson());
        });

        const middleware = webpackMiddleware(compiler, {
            publicPath: config.publicPath
        });

        app.use(middleware);
    });
}
