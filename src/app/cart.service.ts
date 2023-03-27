import { Injectable } from '@angular/core';
import { ICartProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ICartProduct[] = [];

  constructor() { }

  getCart(): ICartProduct[] {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.cartItems;
  }

  addToCart(product: ICartProduct): void {
    this.cartItems.push(product);
    this.updateCart()
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId) 
    this.updateCart()
  }

  updateCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.clear();
  }
}
