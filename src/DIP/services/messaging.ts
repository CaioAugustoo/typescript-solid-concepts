import { MessagingProtocol } from "../classes/interfaces/messaging";

export class Messaging implements MessagingProtocol {
  public sendMessage(message: string): void {
    console.log(`Message *${message}* sent!`);
  }
}
