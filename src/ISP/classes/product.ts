import { Item } from "./interfaces/cart-item";

export class Product implements Item {
  constructor(public name: string, public price: number) {}
}
