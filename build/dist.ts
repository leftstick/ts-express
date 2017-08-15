import * as webpack from 'webpack';
import { prepareConfig } from './webpack.config';
import { env } from '../server/core/environment';

prepareConfig(env())
    .then((webpackConfig: webpack.Configuration) => {
        webpack(webpackConfig, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });

