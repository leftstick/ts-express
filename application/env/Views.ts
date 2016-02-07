'use strict';

import express = require('express');
import path = require('path');

var Views = function(app: express.Express) {
    app.set('views', path.resolve(process.cwd(), 'application', 'logic'));
};

export = Views;
