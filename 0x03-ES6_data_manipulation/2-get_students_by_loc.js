#!/usr/bin/node
export default function getStudentsByLocation(list, city) {
    return list.filter(item => item.location == city) 
}