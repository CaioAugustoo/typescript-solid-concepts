import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from "./interfaces/customer";

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string
  ) {}

  public getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getId(): string {
    return this.cpf;
  }
}
export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  constructor(public name: string, public cnpj: string) {}

  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.cnpj;
  }
}
