import {Component, OnInit} from '@angular/core';
import { Product } from '../../models/product';
import {ProductsService} from "../../service/products.service";

@Component({
  selector: 'product-list-app',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  title: string = "los productos del Año";

  selected: Product;

  products: Product[];

  constructor(private productsService: ProductsService) {

  }

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
