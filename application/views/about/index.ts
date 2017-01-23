import * as express from 'express';

import { View } from '../../fw/model/route';

import { METHODS } from '../../fw/helper/server';

import { BaseModel } from '../common/model/base';

export const about: View = {
    path: '/about',
    routes: [{
        method: METHODS.GET,
        controller: async function (req: express.Request, res: express.Response) {
            res.render('about/about', new BaseModel(req, res));
        }
    }]
};
