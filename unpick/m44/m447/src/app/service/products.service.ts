import { Injectable } from '@angular/core';
import {PRODUCTS} from "../mock/product-mock";
import {Product} from "../models/product";

@Injectable()
export class ProductsService {

  getProducts(): Promise<Product[]>{
    return Promise.resolve(PRODUCTS);
  }

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === id));
  }

}
