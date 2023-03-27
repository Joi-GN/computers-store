import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from 'src/app/products';
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
    ) {}

  ngOnInit(): void {
    const routesParams: ParamMap = this.route.snapshot.paramMap;
    const productId: number = Number(routesParams.get('id'));
    this.product = this.productsService.getOne(productId);
  }
}
