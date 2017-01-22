import * as express from 'express';
import * as cookieParser from 'cookie-parser';

export default function (app: express.Express) {
    app.use(cookieParser());
};
