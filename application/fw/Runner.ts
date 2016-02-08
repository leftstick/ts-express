'use strict';

import express = require('express');

class Runner {

    constructor(public app: express.Express) {
    }

    next(setter: Function): Runner {
        setter(this.app);
        return this;
    }

    go(port: number, callback?: Function) {
        this.app.listen(port, callback);
    }
}

export = Runner;
