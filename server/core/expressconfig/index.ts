import * as express from 'express';
import * as nunjucks from 'nunjucks';
import { resolve } from 'path';

export function setupExpressConfig(app: express.Express) {
    app.enable('trust proxy');

    app.use(express.static(resolve(__dirname, '..', '..', '..', 'public')));

    nunjucks.configure(resolve(__dirname, '..', '..', 'page'), {
        autoescape: true,
        noCache: true,
        express: app
    });
}
