#!/usr/bin/node

const { readFile } = require('node:fs');
const { argv } = require('node:process');
const file = argv[2];

readFile(file, 'utf-8', (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
