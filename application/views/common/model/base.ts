import * as express from 'express';

export class BaseModel {
    route: RouteInfo;
    pretty: boolean;

    constructor(req: express.Request, res: express.Response) {
        this.route = {
            path: req.path
        };
        this.pretty = true;
    }
}

export interface RouteInfo {
    path: String;
}