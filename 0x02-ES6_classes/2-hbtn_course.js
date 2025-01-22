#!/usr/bin/node

export default class ALXCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name
    }

    set name(x) {
        if (typeof x == String) {
            this._name = x
        }
    }

    get length() {
        return this._length
    }

    set name(x) {
        if (typeof x == String) {
            this._name = x
        }
    }

    get students() {
        return this._students
    }

    set students(x) {
        if (typeof x == Array.isArray) {
            this._name = x
        }
    }
}