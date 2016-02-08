'use strict';

import express = require('express');

interface Runnable {
    (app: express.Express): void;
};

export = Runnable;
