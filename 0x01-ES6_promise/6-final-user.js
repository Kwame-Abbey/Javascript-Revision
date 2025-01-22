#!/usr/bin/node
import signUpUser from '4-user-promise.js';
import uploadPhoto from '5-photo-reject.js';

export default function(firstName, lastName, fileName) {
    return promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
        .then(results => results.forEach(res => console.log(res.status)))
}