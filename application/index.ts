'use strict';

import express = require('express');
import Runner = require('./fw/Runner');
import env = require('./env');
import logic = require('./logic');

var app = express();

new Runner(app)
    .set(env)
    .set(logic);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
