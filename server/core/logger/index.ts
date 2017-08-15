import * as winston from 'winston';
import { resolve } from 'path';
import { statSync } from 'fs';
import * as mkdirp from 'mkdirp';

const LOG_PATH = resolve(__dirname, '..', '..', '..', 'log');

try {
    if (!statSync(LOG_PATH).isDirectory()) {
        mkdirp.sync(LOG_PATH);
    }
} catch (e) {
    mkdirp.sync(LOG_PATH);
}

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            filename: `${LOG_PATH}/server.log`
        })
    ]
});

export default logger;
