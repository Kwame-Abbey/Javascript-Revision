#!/usr/bin/node

const { argv } = require('node:process');
const { writeFile } = require('node:fs');
const file = argv[2];
const data = argv[3];

writeFile(file, data, (err) => {
    if (err) console.error(err);
})