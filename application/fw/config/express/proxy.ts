import * as express from 'express';

export default function (app: express.Express) {
    app.enable('trust proxy');
};
