#!/usr/bin/node
// Computes and prints a factorial
const { argv } = require('node:process');
const num = parseInt(argv[2]);

function fact(n) {
    if (isNaN(n)) {
        return (1);
    } else {
        if (n == 0) return 1;
        return (n * fact(n - 1));
    }
}

console.log(fact(num));