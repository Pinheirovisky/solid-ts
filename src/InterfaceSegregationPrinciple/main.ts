/**
 * Interface segregation principle (Princípio da segregação de Interface) -
 * os clientes não devem ser forçados a depender de types, interfaces ou membros
 * abstratos que não utilizam
 */

import {
  TenPercentDiscount,
  FiftyPercentDiscount,
  Order,
  Product,
  ShoppingCart,
  NoPercentDiscount,
} from './classes';
import { InidividualCustomer } from './classes/customer';
import { Messaging, Persistency } from './services';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noPercentDiscount = new NoPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new InidividualCustomer(
  'Vinicius',
  'Pinheiro',
  '000.000.000-00',
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.943));
shoppingCart.addItem(new Product('Bermuda', 39.95));
shoppingCart.addItem(new Product('Tenis', 129.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
