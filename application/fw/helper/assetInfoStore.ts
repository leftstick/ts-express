import * as fs from 'fs';
import * as path from 'path';

const PUBLIC_PATH = '/generated/js/';

class AssetStore {

    info: { [index: string]: string };

    constructor() {
        this.info = {};
    }

    load(): Promise<void> {
        if (process.env.NODE_ENV !== 'production') {
            return Promise.resolve();
        }
        return new Promise<void>((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, '..', '..', '..', 'public', 'generated', 'js', 'stats.json'), 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                this.info = JSON.parse(data);
                resolve();
            });
        });
    }

    get(pageId: string): string {
        if (!this.info[pageId]) {
            return `${PUBLIC_PATH}${pageId}.bundle.js`;
        }
        return `${PUBLIC_PATH}${this.info[pageId]}`;
    }
}

export default new AssetStore();
