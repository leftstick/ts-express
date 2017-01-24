import * as express from 'express';

import assetStore from '../../../fw/helper/assetInfoStore';

export class BaseModel {
    route: RouteInfo;
    pretty: boolean;
    script: string = '';
    css: string = '';

    constructor(req: express.Request, res: express.Response, public pageId: string) {
        this.route = {
            path: req.path
        };
        this.pretty = true;
        this.script = assetStore.getScript(pageId);
        this.css = assetStore.getCss(pageId);
    }
}

export interface RouteInfo {
    path: String;
}