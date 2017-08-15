import * as webpack from 'webpack';

import { env } from '../environment';

export interface IEntryPoints {
    [name: string]: ({ assets: Array<string> });
}


const config = env();

class AssetReader {
    private entryPoints: IEntryPoints = {};

    setup(stats: webpack.Stats.ToJsonOptions) {
        Object.assign(this.entryPoints, stats['entrypoints']);

        Object
            .keys(this.entryPoints)
            .forEach(k => {
                this.entryPoints[k].assets = this.entryPoints[k].assets.map(v => `${config.publicPath}${v}`);
            });

    }

    read() {
        return this.entryPoints;
    }
}


export const assetInfo = new AssetReader();
