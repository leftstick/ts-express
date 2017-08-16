import { assetInfo } from '../../core/assets';

export class BasisModel {

    basis: IBasis;

    constructor(private bundleName: string, private title: string) {
        this.init();
    }

    private init() {
        const entryPoints = assetInfo.read()[this.bundleName] || { assets: [] };

        this.basis = {
            title: this.title,
            assets: {
                css: entryPoints.assets.filter(a => a.endsWith('.css')).map(a => a),
                js: entryPoints.assets.filter(a => a.endsWith('.js')).map(a => a)
            }
        };
    }

}

interface IBasis {
    title: string;
    assets: ({ css: Array<string>; js: Array<string> });
}
