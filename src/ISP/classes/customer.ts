import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from "./interfaces/customer";

export class IndividualCustomer implements IndividualCustomerProtocol {
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string
  ) {}
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  constructor(public name: string, public cnpj: string) {}
}
