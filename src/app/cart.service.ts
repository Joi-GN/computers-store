import { Injectable } from '@angular/core';
import { ICartProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ICartProduct[] = [];

  constructor() { }

  getCart(): ICartProduct[] {
    this.items = JSON.parse(localStorage.getItem('cart') || '');
    return this.items;
  }

  addToCart(product: ICartProduct): void {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart(): void {
    this.items = [];
    localStorage.clear();
  }
}
