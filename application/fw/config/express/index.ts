import * as express from 'express';

import configCookie from './cookie';
import configProxy from './proxy';
import configStatic from './static';
import configTemplate from './template';

export default function (app: express.Express) {

    configCookie(app);
    configProxy(app);
    configStatic(app);
    configTemplate(app);
}
