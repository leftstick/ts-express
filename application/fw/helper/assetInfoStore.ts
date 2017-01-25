import * as fs from 'fs';
import * as path from 'path';

import { isString, isArray } from '../helper/object';

const PUBLIC_PATH = '/generated/';

class AssetStore {

    scripts: { [index: string]: string };
    csss: { [index: string]: string };

    constructor() {
        this.scripts = {};
        this.csss = {};
    }

    load(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, '..', '..', '..', 'public', 'stats.json'), 'utf8', (err, data) => {
                if (err) {
                    if (process.env.NODE_ENV === 'production') {
                        return reject(err);
                    }
                    return resolve();
                }
                const asset = JSON.parse(data);
                this.scripts = Object
                    .keys(asset)
                    .reduce(resolveAssets('.js', asset), {});

                this.csss = Object
                    .keys(asset)
                    .reduce(resolveAssets('.css', asset), {});
                resolve();
            });
        });
    }

    getScript(pageId: string): string {
        if (!this.scripts[pageId]) {
            return '';
        }
        return `${PUBLIC_PATH}${this.scripts[pageId]}`;
    }

    getCss(pageId: string): string {
        if (!this.csss[pageId]) {
            return '';
        }
        return `${PUBLIC_PATH}${this.csss[pageId]}`;
    }
}

export default new AssetStore();

function resolveAssets(postfix: string, asset: Object): ((privous: { [index: string]: string }, current: string) => { [index: string]: string }) {

    return function (p, c) {

        if (isString(asset[c]) && !(<String>asset[c]).endsWith(postfix)) {
            return p;
        }
        if (isArray(asset[c]) && (<Array<String>>asset[c]).every(a => !a.endsWith(postfix))) {
            return p;
        }

        p[c] = isString(asset[c]) ? asset[c] : (<Array<String>>asset[c]).find(a => a.endsWith(postfix));

        return p;
    };
}
