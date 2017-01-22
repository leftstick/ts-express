import * as express from 'express';

import { Base, Route } from '../model/route';

export function config(app: express.Express, things: Array<Base>) {
    things.forEach(t => {
        configEach(app.route(t.path), t.routes);
    });
}

function configEach(router: express.IRoute, routes: Array<Route>) {
    routes.forEach(route => {
        router[route.method](function (req: express.Request, res: express.Response) {
            route.controller(req, res);
        });
    });
}