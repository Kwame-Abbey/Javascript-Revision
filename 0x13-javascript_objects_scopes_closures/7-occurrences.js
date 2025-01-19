#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
    let num = 0;
    list.forEach(n => {
        if (n == searchElement) {
            num++;
        }
    })
    return num;
}