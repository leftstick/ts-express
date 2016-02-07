'use strict';

import express = require('express');
import env = require('./env');
var app = express();

env(app);

app.get('/', function(req: express.Request, res: express.Response) {
    res.send('hello world!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
