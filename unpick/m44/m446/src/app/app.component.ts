import { Component } from '@angular/core';
<<<<<<< HEAD
import {ProductsService} from "../services/products.service";
import {Product} from "../model/product";
=======
>>>>>>> e60bdf74bc08c784383856b05244b7962ced7c31

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'productos';

  selected: Product;

  products: Product[];

  constructor(private productsService: ProductsService) {}

  getProducts() {
    this.productsService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product){
    this.selected = product;
  }
=======
  title = 'app';
>>>>>>> e60bdf74bc08c784383856b05244b7962ced7c31
}
