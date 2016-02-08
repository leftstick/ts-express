'use strict';

import express = require('express');
import Runner = require('./fw/Runner');
import env = require('./env');
import logic = require('./logic');

new Runner(express())
    .next(env)
    .next(logic)
    .go(3000, function() {
        console.log('Example app listening on port 3000!');
    });
