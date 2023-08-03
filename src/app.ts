//classes
class Invoice {
  // readonly client: string;
  // private details: string;
  // amount: number; //By default this is public

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){}

  format() {
    return '${this.client} owes ${this.amount} for ${this.details}'
  }
}

const invOne = new Invoice('tino', 'work on the tino website', 250);
const invTwo = new Invoice('aga', 'work on the aga website', 150);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});


//Dom and Type Casting
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
})