import { PersistencyProtocol } from "../../DIP/classes/interfaces/persistency";
import { Persistency } from "../../DIP/services/persistency";

function makeSut(): PersistencyProtocol {
  return new Persistency();
}

const consoleLogSpy = jest.spyOn(console, "log");

describe("Persistency", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return undefined", () => {
    expect(makeSut().saveOrder()).toBeUndefined();
  });

  it("should call saveOrder method once with correct message", () => {
    makeSut().saveOrder();
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith("Order saved!");
  });

  it("should call saveOrder with incorrect message", () => {
    makeSut().saveOrder();
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).not.toHaveBeenCalledWith("Your order was saved!");
  });
});
