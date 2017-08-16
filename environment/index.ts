import { IEnvironment } from './IEnvironment';

import { env as dev } from './environment';
import { env as prod } from './environment.prod';

export function env(): IEnvironment {
    if (process.env.NODE_ENV === 'production') {
        return prod;
    }
    return dev;
}


export function readCliArgs(key: string, defaultVal: string): string {
    const args = process.argv;
    const foundIndex = args.indexOf(key);
    if (foundIndex < 0) {
        return defaultVal;
    }
    return args[foundIndex + 1] || defaultVal;
}
