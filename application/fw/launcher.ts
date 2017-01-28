import * as express from 'express';

import config from './config';

import assetStore from './helper/assetInfoStore';

export function start() {
    const app: express.Express = express();

    return new Promise<express.Express>((resolve: (value: express.Express) => void, reject: (value: Error) => void) => {
        try {
            config(app);
        } catch (e) {
            return reject(e);
        }
        app.listen(3000, (err: Error) => {
            if (err) {
                return reject(err);
            }
            console.log('Application listening at port 3000!');
            resolve(app);
        });
    });
}

export function compile(app: express.Express): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
        return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
        const webpack = require('webpack');
        const webpackMiddleware = require('webpack-dev-middleware');
        const config = require('../../compile/webpack.client')({ isProd: false });
        const compiler = webpack(config);
        compiler.apply(function () {
            this.plugin('done', function (stats: any) {
                require('fs')
                    .writeFileSync(
                    require('path').resolve(__dirname, '..', '..', 'public', 'stats.json'),
                    JSON.stringify(stats.toJson().assetsByChunkName, null, 4));
                assetStore.load();
            });
        });
        const middleware = webpackMiddleware(compiler, {
            publicPath: config.output.publicPath
        });

        app.use(middleware);

        resolve();
    });
}

export function loadAssetInfo(): Promise<void> {
    return assetStore.load();
}
