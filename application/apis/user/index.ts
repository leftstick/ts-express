import * as express from 'express';

import { Api } from '../../fw/model/route';

import { METHODS } from '../../fw/helper/server';

export const user: Api = {
    path: '/user',
    routes: [{
        method: METHODS.GET,
        controller(req: express.Request, res: express.Response) {

            setTimeout(function () {
                res.json({
                    name: 'Hanmeimei',
                    age: 90,
                    friends: ['Lilei']
                });
            }, 1500);

        }
    }]
};
