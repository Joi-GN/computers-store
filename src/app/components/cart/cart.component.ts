import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ICartProduct } from '../../models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ICartProduct[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    ) {}

  ngOnInit(): void {
      this.cartItems = this.cartService.getCart();
      this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.total = this.cartItems.reduce((previous, current) => previous + (current.price * current.quantity), 0)
  }

  updateCart(): void {
    this.cartService.updateCart(this.cartItems);
    this.calculateTotalPrice();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCart();
    this.calculateTotalPrice();
  }

  buy(): void {
    alert("Produtos comprados!");
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCart();
    this.router.navigate(['']);
  }
}
