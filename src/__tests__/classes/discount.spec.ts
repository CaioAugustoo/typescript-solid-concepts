import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from "../../DIP/classes/discount";

function makeSut(className: new () => Discount) {
  return new className();
}

describe("Discount", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should have no discount", () => {
    const noDiscount = makeSut(NoDiscount);
    const calc = noDiscount.calculate(10.99);

    expect(calc).toBe(10.99);
  });

  it("should have 50% discount", () => {
    const fiftyPercentDiscount = makeSut(FiftyPercentDiscount);
    const calc = fiftyPercentDiscount.calculate(10.99);

    expect(calc).toBe(5.495);
  });

  it("should have 10% discount", () => {
    const tenPercentDiscount = makeSut(TenPercentDiscount);
    const calc = tenPercentDiscount.calculate(150.5);

    expect(calc).toBeGreaterThan(75.25);
  });
});
