import * as express from 'express';

import assetStore from '../../../fw/helper/assetInfoStore';

export class BaseModel {
    route: RouteInfo;
    pretty: boolean;
    script: string = '';

    constructor(req: express.Request, res: express.Response, public pageId: string) {
        this.route = {
            path: req.path
        };
        this.pretty = true;
        this.script = assetStore.get(pageId);
    }
}

export interface RouteInfo {
    path: String;
}