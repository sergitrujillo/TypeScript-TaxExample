export default class IrpfTax {
  constructor(private min:number, private max:number, private tax:number) {
    this.min = min;
    this.max = max;
    this.tax = tax;
  }

  isInRange(amount:number) : boolean {
    return amount > this.min && amount <= this.max;
  }

  calcTax(amount:number) : number {
    return amount * (this.tax / 100);
  }

  getTax(): number {
    return this.tax;
  }
}
