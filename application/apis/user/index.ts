import * as express from 'express';

import { Api } from '../../fw/model/route';

import { METHODS } from '../../fw/helper/server';

export const user: Api = {
    path: '/user',
    routes: [{
        method: METHODS.GET,
        controller: async function (req: express.Request, res: express.Response) {
            res.json({
                name: 'Hanmeimei',
                age: 90,
                friends: ['Lilei']
            });
        }
    }]
};
