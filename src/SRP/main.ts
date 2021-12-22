import { ShoppingCart } from "./entities/shopping_cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Order } from "./entities/order";
import { Product } from "./entities/product";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Camiseta", 40.0));
shoppingCart.addItem(new Product("Caderno", 13.2321321));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
