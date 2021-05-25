/**
 *
 * Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
 * depender de abstrações.
 * Dependa de abstrações, não de implementações.
 * Abstrações não devem depender de detalhes. Detalhes devem depender
 * de abstrações.
 *
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível.
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
import { MessagingProtocol } from './classes/interfaces';
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

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
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
