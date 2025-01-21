#!/usr/bin/node

const request = require('request');
const axios = require('axios');
const { argv } = require('node:process');
const filmId = argv[2]
const url =`https://swapi-api.alx-tools.com/api/films/${filmId}`;

// request(url, function (error, response, body) {
//     // console.error('error:', error);
//     // console.log(response && response.statusCode);
//     if (response.statusCode == 200) {
//         console.log(JSON.parse(body).title);
//     } else if (error) {
//         console.error('error:', error);
//     }
// })

// axios.get(url)
//     .then(response => {
//         console.log(JSON.parse(response.data).title);
//     })
//     .catch(error => {
//         console.error(error.message)
//     })

const getData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(JSON.parse(data).title)
        console.log(data.title);
    } catch (error) {
        console.error(error.message);
    }
}

getData();