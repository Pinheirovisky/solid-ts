import { Order, Product, ShoppingCart } from './entities';
import { Messaging, Persistency } from './services';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.943));
shoppingCart.addItem(new Product('Bermuda', 39.95));
shoppingCart.addItem(new Product('Tenis', 129.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
