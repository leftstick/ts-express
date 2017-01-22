import * as express from 'express';

import { config } from '../fw/helper/route';

import apis from './apis';


export default function (app: express.Express) {

    config(app, apis);
}

