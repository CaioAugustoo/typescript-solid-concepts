import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./shopping_cart";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
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
  }
}
