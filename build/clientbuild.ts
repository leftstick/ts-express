import * as webpack from 'webpack';
import * as del from 'del';
import * as path from 'path';
import { prepareConfig } from './webpack.config';
import { env } from '../server/core/environment';

del([path.resolve(__dirname, '..', 'public', 'generated')])
    .then(() => {
        return prepareConfig(env());
    })
    .then((webpackConfig: webpack.Configuration) => {
        webpack(webpackConfig, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });

