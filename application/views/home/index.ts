import * as express from 'express';

import { View } from '../../fw/model/route';

import { METHODS } from '../../fw/helper/server';

import { HomeModel } from '../common/model/home';

import { getHomeInfo } from '../common/service/home';

export const home: View = {
    path: '/',
    routes: [{
        method: METHODS.GET,
        controller: async function (req: express.Request, res: express.Response) {
            const msg: string = await getHomeInfo();
            res.render('home/home', new HomeModel(req, res, msg));
        }
    }]
};
