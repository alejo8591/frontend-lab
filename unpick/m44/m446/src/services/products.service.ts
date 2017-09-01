import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";
import {Product} from "../model/product";

@Injectable()
export class ProductsService {

  private productsURI = 'api/products';

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get('http://localhost:3000/' + this.productsURI)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
