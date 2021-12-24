import { MessagingProtocol } from "../../DIP/classes/interfaces/messaging";
import { Messaging } from "../../DIP/services/messaging";

function makeSut(): MessagingProtocol {
  return new Messaging();
}

const consoleLogSpy = jest.spyOn(console, "log");

describe("Messaging", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call sendMessage method once and be undefined", () => {
    makeSut().sendMessage("A test message");

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Message *A test message* sent!"
    );
    expect(makeSut().sendMessage("A test message")).toBeUndefined();
  });

  it("should call sendMessage method three times", () => {
    [1, 2, 3].forEach((_, i) =>
      makeSut().sendMessage(`message with index ${i}`)
    );

    expect(consoleLogSpy).toHaveBeenCalledTimes(3);

    expect(consoleLogSpy).toBeCalledWith(
      "Message *message with index 0* sent!"
    );
    expect(consoleLogSpy).toBeCalledWith(
      "Message *message with index 1* sent!"
    );
    expect(consoleLogSpy).toBeCalledWith(
      "Message *message with index 2* sent!"
    );
  });

  it("should return incorrect message value", () => {
    makeSut().sendMessage("Failed message");

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).not.toHaveBeenCalledWith("Message Sent");
  });
});
