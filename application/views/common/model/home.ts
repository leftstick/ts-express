import * as express from 'express';
import { BaseModel } from './base';

export class HomeModel extends BaseModel {

    constructor(req: express.Request, res: express.Response, public msg: string) {
        super(req, res, 'home');
    }
}
