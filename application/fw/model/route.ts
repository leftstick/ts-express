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
    method: string;
    controller: Controller;
}

export interface Controller {
    (req: express.Request, res: express.Response): void;
}
