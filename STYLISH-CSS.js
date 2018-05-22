'use strict';

const express = require('express');
const app = express();
const path = require('path');
const stylus = require('stylus');

let PORT = process.argv[2];
let dir = process.argv[3];

app.use(stylus.middleware(dir));
app.use(express.static(dir));

app.listen(PORT);