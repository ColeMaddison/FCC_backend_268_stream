'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

let PORT = process.argv[2];
let file = process.argv[3];

app.get('/books', (req, res)=>{
    let stream = fs.createReadStream(file);
    let data = ""
    stream.on('data', chunk=>{
        data += chunk;
    });
    stream.on('end', ()=>{
        data = JSON.parse(data);
        res.setHeader("Content-Type", "application/json");
        res.json(data);
    });
});

app.listen(PORT);