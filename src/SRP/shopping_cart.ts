type Item = {
  name: string;
  price: number;
};

type OrderStatus = "open" | "closed";

export class ShoppingCart {
  private readonly _items: Item[] = [];
  private _orderStatus: OrderStatus = "open";

  public addItem(item: Item): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Item[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public total(): number {
    return Number(
      this._items.reduce((prev, cc) => prev + cc.price, 0).toFixed(2)
    );
  }

  public checkout(): void {
    if (this.isEmpty()) {
      throw new Error("Your cart is empty!");
    }

    this._orderStatus = "closed";
    this.sendMessage("We received your order!");
    this.saveOrder();
    this.clear();
  }

  public isEmpty(): boolean {
    return !this.items.length;
  }

  public sendMessage(message: string): void {
    console.log(`Message *${message}* sent!`);
  }

  public saveOrder(): void {
    console.log("Order saved!");
  }

  public clear(): void {
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: "Camiseta", price: 40.0 });
shoppingCart.addItem({ name: "Caderno", price: 13.2321321 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
