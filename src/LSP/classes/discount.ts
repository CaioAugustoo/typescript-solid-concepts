export class Discount {
  protected discount: number = 0;

  public calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected discount: number = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected discount: number = 0.1;
}

export class NoDiscount extends Discount {}
