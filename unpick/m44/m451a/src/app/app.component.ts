import { Component } from '@angular/core';
import {Product} from "./models/product";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "los productos del Año";

  selected: Product;

  products: Product[];

  constructor(private productsService: ProductsService) {

  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(
        products => {
          this.products = products;
        },

        error => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product){
    this.selected = product;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productsService.create(name)
      .subscribe(product => {
        this.products.push(product);
        this.selected = null;
      });
  }
}
