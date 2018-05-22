'use strict';

const express = require('express');
const app = express();
const bodyparser = require('body-parser');

let PORT = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/search', (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.query));
});

app.listen(PORT);