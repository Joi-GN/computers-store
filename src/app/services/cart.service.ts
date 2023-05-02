import { Injectable } from '@angular/core';
import { ICartProduct } from '../models/products';

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
    let existingItem = this.cartItems.find(item => item.id == product.id)
    if (existingItem) existingItem.quantity += product.quantity;
    else this.cartItems.push(product);
    this.updateCart(this.cartItems)
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId) 
    this.updateCart(this.cartItems)
  }

  updateCart(cart: ICartProduct[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.clear();
  }
}
