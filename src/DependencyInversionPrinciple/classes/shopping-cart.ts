import { Discount } from './discount';
import { CartItem } from './interfaces';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.slice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, current) => total + current.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    const result = this.discount.calculate(this.total());

    if (typeof result == 'number') return result;
    return this.total();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}

export default ShoppingCart;
