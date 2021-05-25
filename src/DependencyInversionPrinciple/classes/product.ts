import { CartItem } from './interfaces';

class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}

export default Product;
