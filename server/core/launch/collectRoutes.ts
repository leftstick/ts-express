import * as express from 'express';

import logger from '../logger';
import { routes } from '../../route';

export function setupRoutes(app: express.Express) {
    routes.forEach(route => {
        app.get(route.path, function (req: express.Request, res: express.Response) {

            try {
                const result = route.controller(req, res);
                if (isPromise(result)) {
                    result
                        .catch((e: Error) => {
                            logger.error(`[RUNTIME_ASYNC] => ${e && e.stack || e}`);
                        });
                }
            } catch (err) {
                logger.error(`[RUNTIME] => ${err.stack || err}`);
            }

        });
    });
}


function isPromise(obj: Promise<any> | void): obj is Promise<any> {
    return obj && (<Promise<any>>obj).catch !== undefined;
}
