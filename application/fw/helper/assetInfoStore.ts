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
        if (process.env.NODE_ENV !== 'production') {
            return Promise.resolve();
        }
        return new Promise<void>((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, '..', '..', '..', 'public', 'generated', 'stats.json'), 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                const asset = JSON.parse(data);
                this.scripts = Object
                    .keys(asset)
                    .reduce((p, c) => {
                        if (isString(asset[c]) && !(<String>asset[c]).endsWith('.js')) {
                            return p;
                        }
                        if (isArray(asset[c]) && (<Array<String>>asset[c]).every(a => !a.endsWith('.js'))) {
                            return p;
                        }

                        p[c] = isString(asset[c]) ? asset[c] : (<Array<String>>asset[c]).find(a => a.endsWith('.js'));
                        return p;
                    }, {});

                this.csss = Object
                    .keys(asset)
                    .reduce((p, c) => {
                        if (isString(asset[c]) && !(<String>asset[c]).endsWith('.css')) {
                            return p;
                        }
                        if (isArray(asset[c]) && (<Array<String>>asset[c]).every(a => !a.endsWith('.css'))) {
                            return p;
                        }

                        p[c] = isString(asset[c]) ? asset[c] : (<Array<String>>asset[c]).find(a => a.endsWith('.css'));
                        return p;
                    }, {});
                resolve();
            });
        });
    }

    getScript(pageId: string): string {
        if (!this.scripts[pageId]) {
            return `${PUBLIC_PATH}${pageId}.bundle.js`;
        }
        return `${PUBLIC_PATH}${this.scripts[pageId]}`;
    }

    getCss(pageId: string): string {
        if (!this.csss[pageId]) {
            return `${PUBLIC_PATH}${pageId}.css`;
        }
        return `${PUBLIC_PATH}${this.csss[pageId]}`;
    }
}

export default new AssetStore();
