import * as express from 'express';

import expressConfig from './express';

import viewConfig from '../../views';
import apiConfig from '../../apis';

export default function (app: express.Express) {

    expressConfig(app);

    viewConfig(app);
    apiConfig(app);
}
