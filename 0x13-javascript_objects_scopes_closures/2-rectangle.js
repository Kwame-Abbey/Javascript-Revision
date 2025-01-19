#!/usr/bin/node

class Rectangle {
    constructor (w, h) {
        this.width = w;
        this.height = h;
    }

    set width(x) {
        if (x <= 0) {
            return new Rectangle();
        }
    }

    set height(x) {
        if (x <= 0) {
            return new Rectangle();
        }
    }
}

module.exports = Rectangle;