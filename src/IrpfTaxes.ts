import IrpfTax from './IrpfTax';

const IRPF_TAXES: IrpfTax[] = [
  new IrpfTax(0, 12_450, 19),
  new IrpfTax(0, 20_200, 24),
  new IrpfTax(20_200, 35_200, 30),
  new IrpfTax(35_200, 60_000, 37),
  new IrpfTax(60_000, 300_000, 45),
  new IrpfTax(300_000, Infinity, 47),
];

export default class IrpfTaxes {
  public static calcTax(amount: number): number {
    let calc = 0;
    IRPF_TAXES.forEach((tax) => {
      if (tax.isInRange(amount)) {
        // console.log(`% ${tax.getTax()}`);
        calc = tax.calcTax(amount);
      }
    });
    return calc;
  }
}
