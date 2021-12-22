import { Item } from "./interfaces/cart-item";

export class ShoppingCart {
  private readonly _items: Item[] = [];

  public addItem(item: Item): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Item[]> {
    return this._items;
  }

  public total(): number {
    return Number(
      this._items.reduce((prev, cc) => prev + cc.price, 0).toFixed(2)
    );
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public clear(): void {
    this._items.length = 0;
  }
}
