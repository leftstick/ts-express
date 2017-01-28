import * as express from 'express';

export interface Base {
    path: string;
    routes: Array<Route>;
}

export interface View extends Base {

};

export interface Api extends Base {

};

export interface Route {
    method: 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete' | 'options';
    controller: Controller;
}

export interface Controller {
    (req: express.Request, res: express.Response): void | Promise<any>;
}
