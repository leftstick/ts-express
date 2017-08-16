import { env, readCliArgs } from '../environment';
process.env.NODE_ENV = readCliArgs('--env', 'dev');
import * as webpack from 'webpack';
import * as del from 'del';
import * as path from 'path';
import { prepareConfig } from './webpack.config';


del([path.resolve(__dirname, '..', 'public', 'generated')])
    .then(() => {
        return prepareConfig(env());
    })
    .then((webpackConfig: webpack.Configuration) => {
        webpack(webpackConfig, (err, stats: webpack.Stats) => {
            if (err) {
                return console.error(err);
            }
            console.log(stats.toString({
                colors: true
            }));
            if (!stats.hasErrors()) {
                console.log('\nClient build successfully~!!!');
            }
        });
    });

