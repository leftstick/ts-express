import * as express from 'express';

import { config } from '../fw/helper/route';

import views from './views';


export default function (app: express.Express) {

    config(app, views);
}

