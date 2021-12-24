import {
  EnterpriseCustomer,
  IndividualCustomer,
} from "../../DIP/classes/customer";

import {
  IndividualCustomerProtocol,
  CustomerOrder,
  EnterpriseCustomerProtocol,
} from "../../DIP/classes/interfaces/customer";

type CustomerProtocol<T> = T & CustomerOrder;

function makeSutIndivialCustomer(
  firstName: string,
  lastName: string,
  cpf: string
): CustomerProtocol<IndividualCustomerProtocol> {
  return new IndividualCustomer(firstName, lastName, cpf);
}

function makeSutEnterpriseCustomer(
  name: string,
  cnpj: string
): CustomerProtocol<EnterpriseCustomerProtocol> {
  return new EnterpriseCustomer(name, cnpj);
}

describe("Customer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should get individual customer data", () => {
    const indivialCustomer = makeSutIndivialCustomer(
      "Customer",
      "Will",
      "123.456.789-01"
    );

    expect(indivialCustomer).toEqual({
      firstName: "Customer",
      lastName: "Will",
      cpf: "123.456.789-01",
    });

    expect(indivialCustomer.getName()).toBe("Customer Will");
    expect(indivialCustomer.getId()).toBe("123.456.789-01");
  });

  it("should get enterprise customer data", () => {
    const enterpriseCustomer = makeSutEnterpriseCustomer(
      "Udemy",
      "12.345.678/1234-56"
    );

    expect(enterpriseCustomer).toEqual({
      name: "Udemy",
      cnpj: "12.345.678/1234-56",
    });

    expect(enterpriseCustomer.getName()).toBe("Udemy");
    expect(enterpriseCustomer.getId()).toBe("12.345.678/1234-56");
  });
});
