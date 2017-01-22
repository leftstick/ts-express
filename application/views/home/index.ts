import * as express from 'express';

import { View } from '../../fw/model/route';

import { METHODS } from '../../fw/helper/server';

export const home: View = {
    path: '/',
    routes: [{
        method: METHODS.GET,
        controller: async function (req: express.Request, res: express.Response) {
            res.render('home/home', {
                title: 'hello',
                message: 'what the fuck it is?'
            });
        }
    }]
};
