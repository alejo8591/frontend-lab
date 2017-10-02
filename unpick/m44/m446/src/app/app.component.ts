import { Component } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
