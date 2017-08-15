import * as express from 'express';

import { PathParams } from './path';
import { METHODS } from './method';

export interface IEntry {
    path: PathParams;
    controller: Controller;
}

export interface IAPI extends IEntry {
    method: METHODS.GET | METHODS.POST | METHODS.PUT | METHODS.PATCH | METHODS.HEAD | METHODS.DELETE | METHODS.OPTIONS;
}

export interface IPage extends IEntry {
    /**
     * for bundle generation
     */
    bundleName: string;
}

export interface Controller {
    (req: express.Request, res: express.Response): void | Promise<any>;
}
