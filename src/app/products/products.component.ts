import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : IProduct[] | undefined;

  constructor (
    private productsService : ProductsService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(param => {
      const name = param.get("name")?.toLowerCase();
      this.products = this.productsService.getAll();

      if (name) {
        this.products = this.products.filter(product => product.name.toLowerCase().includes(name))
      } else {
        this.products = this.productsService.getAll();
      }
    })

  }
}
