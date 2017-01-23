import * as express from 'express';

import { View } from '../../fw/model/route';

import { METHODS } from '../../fw/helper/server';

import { BaseModel } from '../common/model/base';

export const home: View = {
    path: '/',
    routes: [{
        method: METHODS.GET,
        controller: async function (req: express.Request, res: express.Response) {
            res.render('home/home', new BaseModel(req, res));
        }
    }]
};
