'use strict';

import express = require('express');

class Runner {

    constructor(public app: express.Express) {
    }

    set(setter: Function): Runner {
        setter(this.app);
        return this;
    }
}

export = Runner;
