'use strict';

import express = require('express');
import Runnable = require('./Runnable');

class Runner {

    constructor(public app: express.Express) {
    }

    next(setter: Runnable): Runner {
        setter(this.app);
        return this;
    }

    go(port: number, callback?: Function) {
        this.app.listen(port, callback);
    }
}

export = Runner;
