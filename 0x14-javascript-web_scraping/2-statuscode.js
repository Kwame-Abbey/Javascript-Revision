#!/usr/bin/node

// const request = require('request');
const { argv } = require('node:process');
// const axios = require('axios');
const url = argv[2];

// axios.get(url)
//     .then(response => {
//         console.log(response.status)
//     })
//     .catch(error => {
//         console.log(error);
//     })

// request(url, function (error, response, body) {
//     // console.error("error": error);
//     console.log(response && response.statusCode);
// })

const getData = async () => {
    try {
        const response = await fetch(url);
        const status = await response.status;
        console.log(status);
    } catch (error) {
        console.error(error.message);
    }
}

getData();