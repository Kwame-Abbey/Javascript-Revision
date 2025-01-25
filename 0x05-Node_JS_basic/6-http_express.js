#!/usr/bin/node
const express = require('express');
const app = express();

port = 1245;

app.get('/', (req, res) => {
    res.send('Hello ALX');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})