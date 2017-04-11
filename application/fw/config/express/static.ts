import * as express from 'express';
import { resolve } from 'path';

export default function (app: express.Express) {
    app.use(express.static(resolve(__dirname, '..', '..', '..', '..', 'public')));
}