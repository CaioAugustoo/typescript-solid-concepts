import { PersistencyProtocol } from "../classes/interfaces/persistency";

export class Persistency implements PersistencyProtocol {
  public saveOrder(): void {
    console.log("Order saved!");
  }
}
