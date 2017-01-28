import * as express from 'express';

import { METHODS } from '../helper/server';

export interface Base {
    path: string;
    routes: Array<Route>;
}

export interface View extends Base {

};

export interface Api extends Base {

};

export interface Route {
    method: METHODS.GET | METHODS.POST | METHODS.PUT | METHODS.PATCH | METHODS.HEAD | METHODS.DELETE | METHODS.OPTIONS;
    controller: Controller;
}

export interface Controller {
    (req: express.Request, res: express.Response): void | Promise<any>;
}
