'use strict';

import express = require('express');
import Runnable = require('../fw/Runnable');
import serveStatic = require('./ServeStatic');
import viewEngine = require('./ViewEngine');
import views = require('./Views');

var env: Runnable = function(app: express.Express) {
    serveStatic(app);
    viewEngine(app);
    views(app);
};

export = env;
