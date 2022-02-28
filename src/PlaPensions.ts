export default class PlaPensions {
  private aportacio:number;

  constructor(private maximDesgravable: number, private nom: string) {
    this.maximDesgravable = maximDesgravable;
    this.nom = nom;
    this.aportacio = 0;
  }

  public isAplicable(amount: number) :boolean {
    return amount <= this.maximDesgravable;
  }

  public getNom() {
    return this.nom;
  }

  public setAportacio(amount: number) {
    if (!this.isAplicable(amount)) {
      throw new Error(`L'aportació ha de ser com a molt de ${this.maximDesgravable} Euros.`);
    }
    this.aportacio = amount;
  }

  public getAportacio(): number {
    return this.aportacio;
  }
}
