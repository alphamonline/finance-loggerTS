"use strict";
//classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // amount: number; //By default this is public
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return '${this.client} owes ${this.amount} for ${this.details}';
    }
}
const invOne = new Invoice('tino', 'work on the tino website', 250);
const invTwo = new Invoice('aga', 'work on the aga website', 150);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//Dom and Type Casting
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
