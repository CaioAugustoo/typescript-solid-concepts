import { Item } from "../../DIP/classes/interfaces/cart-item";
import { Product } from "../../DIP/classes/product";

function makeSut(product: Item): Item {
  return new Product(product.name, product.price);
}

describe("Persistency", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const fakeProduct1 = makeSut({ name: "white t-shirt", price: 57.98 });
  const fakeProduct2 = makeSut({ name: "black t-shirt", price: 32.12 });

  it("should return correctly", () => {
    expect(fakeProduct1).toEqual({
      name: "white t-shirt",
      price: 57.98,
    });

    expect(fakeProduct2).toEqual({
      name: "black t-shirt",
      price: 32.12,
    });
  });

  it("should return incorrectly", () => {
    expect(fakeProduct1).not.toEqual({
      name: "red shoes",
      price: 127.92,
    });

    expect(fakeProduct2).not.toEqual({
      name: "purple jeans",
      price: 78.65,
    });
  });
});
