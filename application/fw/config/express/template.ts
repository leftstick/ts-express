import * as express from 'express';

import { resolve } from 'path';

export default function (app: express.Express) {
    app.set('view engine', 'pug');
    app.set('views', resolve(__dirname, '..', '..', '..', 'views'));
}
