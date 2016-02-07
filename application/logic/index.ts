'use strict';

import express = require('express');
import hello = require('./hello');

var logic = function(app: express.Express) {
    hello(app);
};

export = logic;
