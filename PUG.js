'use strict';

const express = require('express');
const app = express();
const path = require('path');

let PORT = process.argv[2];

app.set('views', path.join(__dirname, 'assets'));
app.set('view engine', 'pug');

app.get('/home', (req, res)=>{
    res.render('index', {date:new Date().toDateString()});
});

app.listen(PORT);