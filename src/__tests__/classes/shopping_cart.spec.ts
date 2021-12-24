import { NoDiscount } from "../../DIP/classes/discount";
import { Item } from "../../DIP/classes/interfaces/cart-item";
import { ShoppingCart } from "../../DIP/classes/shopping_cart";

function makeSut() {
  return new ShoppingCart(new NoDiscount());
}

describe("ShoppingCart", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should cart be empty", () => {
    expect(makeSut().isEmpty()).toBe(true);
  });

  it("should have 2 items in cart", () => {
    const fakeProduct1: Item = { name: "Red cap", price: 952.21 };
    const fakeProduct2: Item = { name: "Purple Shirt", price: 125.21 };

    const sut = makeSut();

    expect(sut.isEmpty()).toBe(true);

    sut.addItem({ name: fakeProduct1.name, price: fakeProduct1.price });

    sut.addItem({ name: fakeProduct2.name, price: fakeProduct2.price });

    expect(sut.items).toHaveLength(2);

    expect(sut.items).toEqual([
      { name: "Red cap", price: 952.21 },
      { name: "Purple Shirt", price: 125.21 },
    ]);

    expect(sut.isEmpty()).toBe(false);
    expect(sut.total()).toBe(fakeProduct1.price + fakeProduct2.price);
    expect(sut.totalWithDiscount()).toBe(
      fakeProduct1.price + fakeProduct2.price
    );
  });

  it("should remove all items in cart and it should be empty", () => {
    const fakeProduct: Item = { name: "Red cap", price: 952.21 };

    const sut = makeSut();

    expect(sut.isEmpty()).toBe(true);

    sut.addItem({ name: fakeProduct.name, price: fakeProduct.price });
    expect(sut.isEmpty()).toBe(false);

    expect(sut.items).toHaveLength(1);
    sut.clear();

    expect(sut.items).toHaveLength(0);
    expect(sut.isEmpty()).toBe(true);
  });
});
