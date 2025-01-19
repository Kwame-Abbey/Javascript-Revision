#!/usr/bin/node
const { argv } = require('node:process');

const arg = parseInt(argv[2]);

if (isNaN(arg)) {
    console.log('Missing size');
} else {
    const array = [];
    for (let i = 0; i < arg; i++) {
        array.push('X');
    }
    for (let i = 0; i < arg; i++) {
        console.log(array.join(''));
    }
}