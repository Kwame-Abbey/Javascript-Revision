#!/usr/bin/node

class Rectangle {
    constructor (w, h) {
        if (w <=0 || isNaN(w) || h <= 0 || isNaN(h)) {
            return this;
        }
        this.width = w;
        this.height = h;
    }

    // set width(x) {
    //     if (x <= 0 || isNaN(x)) {
    //         return new Rectangle();
    //     }
    // }

    // set height(x) {
    //     if (x <= 0 || isNaN(x)) {
    //         return new Rectangle();
    //     }
    // }

    // get width() {
    //     return this.width;
    // }

    // get height() {
    //     return this.height;
    // }

    print() {
            const a = []
            for (let j = 0; j < this.width; j++) {
                a.push('X');
            }
            for (let i = 0; i < this.height; i++) {
                console.log(a.join(''));
            }
    }

    rotate() {
        const x = this.height;
        this.height = this.width;
        this.width = x;
    }

    double() {
        this.height = this.height * 2;
        this.width = this.width * 2;
    }
}

module.exports = Rectangle;