import { ShoppingCart } from "./classes/shopping_cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { TenPercentDiscount } from "./classes/discount";
import { EnterpriseCustomer } from "./classes/customer";
import { MessagingProtocol } from "./classes/interfaces/messaging";

class MessagingMock implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log(message);
  }
}

const tenPercentDiscount = new TenPercentDiscount();
const customer = new EnterpriseCustomer("Business Brand", "9999-9994.222");
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const messagingMock = new MessagingMock();
const order = new Order(shoppingCart, messagingMock, persistency, customer);

shoppingCart.addItem(new Product("Camiseta", 40.0));
shoppingCart.addItem(new Product("Caderno", 13.2321321));
shoppingCart.addItem(new Product("Caderno", 452.2321321));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
