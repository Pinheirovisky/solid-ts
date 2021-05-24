abstract class Discount {
  abstract calculate(value: number): number;
}

class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(value: number): number {
    return value - value * this.discount;
  }
}

class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;

  calculate(value: number): number {
    return value - value * this.discount;
  }
}
class NoPercentDiscount extends Discount {
  calculate(value: number): number {
    return value;
  }
}

export {
  Discount,
  TenPercentDiscount,
  FiftyPercentDiscount,
  NoPercentDiscount,
};
