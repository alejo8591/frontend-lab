import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {PRODUCTS} from "../mocks/product-mock";

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
