import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../../service/products.service";

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent {
  product: Product;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.productsService.getProduct(id)
        .then(product => this.product = product);
    });
  }
}

