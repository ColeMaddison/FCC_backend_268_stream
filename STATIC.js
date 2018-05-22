'use strict';

const express = require('express');
const app = express();
const path = require('path');

let PORT = process.argv[2];

app.use(express.static(path.join(__dirname, 'assets')));

app.listen(PORT);