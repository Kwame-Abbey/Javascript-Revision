#!/usr/bin/node

const request = require('request');
const { argv } = require('node:process');
const url = argv[2];

request(url, function (error, response, body) {
    if (response && response.statusCode == 200) {
        let completed = 0;
        const fin = {};
        const data = JSON.parse(body)

        for (const obj of data) {
            const userId = obj.userId;
            if (obj.completed) {
                fin[userId]
            }
        }
    }
})
