import * as express from 'express';

import { env } from './core/environment';

import { setupExpressConfig } from './core/expressconfig';
import { setupRoutes } from './core/launch/collectRoutes';
import { prepareClientScript } from './core/launch/prepareClientScript';

import logger from './core/logger';

const config = env();

const app = express();


startup();

async function startup() {
    setupExpressConfig(app);
    await prepareClientScript(app);
    setupRoutes(app);

    app.listen(config.port, (err: Error) => {
        if (err) {
            return logger.error(`[STARTUP] => ${err && err.stack || err}`);
        }
        console.log(`Application listening at port ${config.port}!`);
    });
}