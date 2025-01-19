#!/usr/bin/node
const { argv } = require('node:process');

const num = argv.length;

if (num < 3) {
    console.log('No argument');
} else if (num == 3) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}