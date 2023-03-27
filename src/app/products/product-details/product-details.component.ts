import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { ICartProduct, IProduct } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : IProduct | undefined;
  productQuantity : number = 1;

  constructor (
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService,
    ) {}

  ngOnInit(): void {
    const routesParams: ParamMap = this.route.snapshot.paramMap;
    const productId: number = Number(routesParams.get('id'));
    this.product = this.productsService.getOne(productId);
  }

  addToCart(): void {
    const product: ICartProduct = {
      ...this.product!,
      quantity: this.productQuantity
    };
    this.cartService.addToCart(product);
    this.notificationService.notify('O produto foi adicionado ao carrinho');
  }
}
