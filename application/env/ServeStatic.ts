'use strict';

import express = require('express');

var ServeStatic = function(app: express.Express) {
    app.use(express.static('public'));
};

export = ServeStatic;
