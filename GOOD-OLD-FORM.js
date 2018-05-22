'use strict';

const express = require('express');
const app = express();
const bodyparser = require('body-parser');

let PORT = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.post('/form', (req, res)=>{
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(PORT);