import { Injectable } from '@angular/core';
import {PRODUCTS} from "../mock/product-mock";

@Injectable()
export class ProductsService {

  getProducts(){
    return Promise.resolve(PRODUCTS);
  }

}
