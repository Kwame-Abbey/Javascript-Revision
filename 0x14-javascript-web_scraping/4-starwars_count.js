#!/usr/bin/node

const request = require('request');
const { argv } = require('node:process');
const charId = 18;
const url = argv[2];


request(url, function (error, response, body) {
    if (response && response.statusCode == 200) {
        const data = JSON.parse(body).results;
        let count = 0;
        for (const film of data) {
            const characters = film.characters;
            for (const i of characters) {
                if (i.includes('18')) {
                    count++;
                }
            }
        }
        console.log(count);
    } else if (error) {
        console.error(error);
    }
})