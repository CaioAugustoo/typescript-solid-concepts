import { ShoppingCart } from "./classes/shopping_cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { TenPercentDiscount } from "./classes/discount";

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Camiseta", 40.0));
shoppingCart.addItem(new Product("Caderno", 13.2321321));
shoppingCart.addItem(new Product("Caderno", 452.2321321));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
