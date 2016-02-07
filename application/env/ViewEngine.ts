'use strict';

import express = require('express');

var ViewEngine = function(app: express.Express) {
    app.set('view engine', 'jade');
};

export = ViewEngine;
