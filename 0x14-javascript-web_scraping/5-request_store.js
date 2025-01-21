#!/usr/bin/node

const { argv } = require('node:process');
const request = require('request');
const { writeFile } = require('node:fs');
const url = argv[2];
const file = argv[3];

request(url, function (error, response, body) {
    if (response && response.statusCode == 200) {
        writeFile(file, body, (err) => {
            if (err) console.error(err);
        })
    } else if (error) {
        console.error(error);
    }
})

