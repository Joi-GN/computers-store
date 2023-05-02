import { Injectable } from '@angular/core';
import { IProduct, products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProduct[] = products;

  constructor() { }

  getAll(): IProduct[] {
    return this.products;
  }

  getOne(productId: number):IProduct | undefined {
    return this.products.find(product => product.id == productId);
  }
}
