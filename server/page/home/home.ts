import * as express from 'express';

import { METHODS } from '../../model/core/method';
import { IPage } from '../../model/core/IEntry';

import { HomeModel } from '../../model/home/HomeModel';


const BUNDLE_NAME = 'home';

export const Home: IPage = {
    bundleName: BUNDLE_NAME,
    path: '/',
    async controller(req: express.Request, res: express.Response) {
        res.render('home/home.njk', new HomeModel(BUNDLE_NAME));
    }
};
