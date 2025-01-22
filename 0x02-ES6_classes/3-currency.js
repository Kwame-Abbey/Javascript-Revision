#!/usr/bin/node
export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    get code() {
        return this._code;
    }

    get name() {
        return this._name;
    }

    set code(x) {
        if (typeof x == String) {
            this._code = x
        } else {
            throw new Error('TypeError: Code must be a string')
        }
    }

    set name(x) {
        if (typeof x == String) {
            this._name = x
        } else {
            throw new Error('TypeError: Name must be a string')
        }
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`
    }
}