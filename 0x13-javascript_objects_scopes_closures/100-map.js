#!/usr/bin/node

const array = require('./100-data').list;

console.log(array);
console.log(array.map((item, index) => item * index));