'use strict';

import express = require('express');
import serveStatic = require('./ServeStatic');
import viewEngine = require('./ViewEngine');
import views = require('./Views');

var env = function(app: express.Express) {
    serveStatic(app);
    viewEngine(app);
    views(app);
};

export = env;
