import { OrderStatus } from "./interfaces/order-status";
import { CustomerOrder } from "./interfaces/customer";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart";
import { MessagingProtocol } from "./interfaces/messaging";
import { PersistencyProtocol } from "./interfaces/persistency";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
