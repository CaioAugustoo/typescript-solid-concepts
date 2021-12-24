import { Order } from "../../DIP/classes/order";
import { ShoppingCart } from "../../DIP/classes/shopping_cart";
import { NoDiscount } from "../../DIP/classes/discount";
import { Messaging } from "../../DIP/services/messaging";
import { Persistency } from "../../DIP/services/persistency";
import { IndividualCustomer } from "../../DIP/classes/customer";

function makeSut() {
  const noDiscount = new NoDiscount();
  const shoppingCart = new ShoppingCart(noDiscount);
  const messaging = new Messaging();
  const persistency = new Persistency();
  const customer = new IndividualCustomer(
    "Individual",
    "Customer",
    "111.111.111-11"
  );

  return {
    shoppingCart,
    order: new Order(shoppingCart, messaging, persistency, customer),
  };
}

describe("Order", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const sut = makeSut();

  it("should get initial orderStatus", () => {
    expect(sut.order.orderStatus).toBe("open");
  });

  it("should add item to cart and checkout", () => {
    const consoleLogSpy = jest.spyOn(console, "log");

    sut.shoppingCart.addItem({
      name: "fake product",
      price: 132.12,
    });

    sut.order.checkout();

    expect(sut.order.orderStatus).toBe("closed");
    expect(consoleLogSpy).toBeCalledWith(
      "Message *We received your order!* sent!"
    );
    expect(consoleLogSpy).toBeCalledWith("Order saved!");
    expect(sut.shoppingCart.isEmpty()).toBe(true);
    expect(consoleLogSpy).toBeCalledWith(
      "The customer is Individual Customer, 111.111.111-11"
    );
  });
});
