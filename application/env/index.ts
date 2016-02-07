'use strict';

import express = require('express');
import serveStatic = require('./ServeStatic');

var env = function(app: express.Express) {
    serveStatic(app);
};

export = env;
