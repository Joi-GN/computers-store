import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : IProduct[] | undefined;
  productsFound: boolean = true;

  constructor (
    private productsService : ProductsService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(param => {
      const productName = param.get("productName")?.toLowerCase();
      this.products = this.productsService.getAll();

      if (productName) {
        this.products = this.products.filter(product => product.name.toLowerCase().includes(productName))
        if (this.products.length == 0) this.productsFound = false;
        else this.productsFound = true;
      } else {
        this.products = this.productsService.getAll();
        this.productsFound = true;
      }
    })

  }
}
