#!/usr/bin/node

export default function returnHowManyArguments(...args) {
    let count = 0;
    for (const i in args) {
        count++;
    }
    return count;
}
