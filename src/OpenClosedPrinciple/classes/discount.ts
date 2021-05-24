abstract class Discount {
  protected discount = 0;

  calculate(value: number): number {
    return value - value * this.discount;
  }
}

class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}
class NoPercentDiscount extends Discount {}

export {
  Discount,
  TenPercentDiscount,
  FiftyPercentDiscount,
  NoPercentDiscount,
};
