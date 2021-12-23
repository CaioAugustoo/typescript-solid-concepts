import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./shopping_cart";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { CustomerOrder } from "./interfaces/customer";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      throw new Error("Your cart is empty!");
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage("We received your order!");
    this.persistency.saveOrder();
    this.shoppingCart.clear();
    console.log(
      `The customer is ${this.customer.getName()}, ${this.customer.getId()}`
    );
  }
}
