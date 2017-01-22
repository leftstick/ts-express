import * as express from 'express';

import config from './config';



export default function () {
    const app: express.Express = express();

    return new Promise<string>((resolve: (value: string) => void, reject: (value: Error) => void) => {
        try {
            config(app);
        } catch (e) {
            return reject(e);
        }
        app.listen(3000, (err: Error) => {
            if (err) {
                return reject(err);
            }
            resolve('Application listening at port 3000!');
        });
    });
}
