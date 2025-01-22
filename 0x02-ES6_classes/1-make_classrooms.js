#!/usr/bin/node
import ClassRoom from './0-classroom.js'

export default function initializeRooms() {
    const array = []
    for (let size of [19, 20, 34]) {
        array.push(new ClassRoom(size))
    }
    return  array;
}
