'use strict';

import express = require('express');

var hello = function(app: express.Express) {
    app.get('/', function(req: express.Request, res: express.Response) {
        res.render('hello/hello', { title: 'First Page', message: 'Hello World!' });
    });
};

export = hello;
