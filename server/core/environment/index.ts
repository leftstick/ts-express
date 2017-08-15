import { IEnvironment } from '../../model/core/IEnvironment';

import { env as dev } from './environment';
import { env as prod } from './environment.prod';

export function env(): IEnvironment {
    if (process.env.NODE_ENV === 'production') {
        return prod;
    }
    return dev;
}
