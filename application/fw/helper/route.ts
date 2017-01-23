import * as express from 'express';
import logger from '../logger';

import { Base, Route } from '../model/route';

export function config(app: express.Express, things: Array<Base>) {
    things.forEach(t => {
        configEach(app.route(t.path), t.routes);
    });
}

function configEach(router: express.IRoute, routes: Array<Route>) {
    routes.forEach(route => {
        router[route.method](function (req: express.Request, res: express.Response) {
            try {
                const result = route.controller(req, res);
                if (result && result['then']) {
                    (<Promise<any>>result)
                        .catch((e: Error) => {
                            logger.error(`[RUNTIME_ASYNC] => ${e.stack || e}`);
                        });
                }
            } catch (err) {
                logger.error(`[RUNTIME] => ${err.stack || err}`);
            }
        });
    });
}