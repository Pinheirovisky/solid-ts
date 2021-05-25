export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface InidividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
