#!/usr/bin/node
const { argv } = require('node:process');
const len = argv.length;

if (len == 2 || len == 3) {
    console.log(0);
} else {
    const array = [];
    for (let i = 2; i < len; i++) {
        array.push(parseInt(argv[i]));
    }
    array.sort((a, b) => a - b);
    const a = array.length;
    console.log(array[len - 2]);
}