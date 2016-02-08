'use strict';

import express = require('express');
import hello = require('./hello');
import Runnable = require('../fw/Runnable');

var logic: Runnable = function(app: express.Express) {
    hello(app);
};

export = logic;
