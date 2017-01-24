import * as express from 'express';
import { BaseModel } from './base';

export class AboutModel extends BaseModel {

    constructor(req: express.Request, res: express.Response) {
        super(req, res, 'about');
    }
}
