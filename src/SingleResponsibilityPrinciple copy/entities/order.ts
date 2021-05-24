import { OrderStatus } from './interfaces';
import { Messaging, Persistency } from '../services';
import ShoppingCart from './shopping-cart';

class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com o total de ${this.cart.total()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}

export default Order;
