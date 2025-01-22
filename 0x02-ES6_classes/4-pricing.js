#!/usr/bin/node
import Currency from './3-currency.js'

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }

    set amount(x) {
        if (typeof x == Number) {
            this._amount = x
        } else {
            throw new Error('TypeError: amount must be a string')
        }
    }

    set currency(x) {
        if ( x instanceof Currency) {
            this._currency = x
        } else {
            throw new Error('TypeError: currency must be a Currency')
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this.currency.displayFullCurrency()}`
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}