import {Component, Input} from '@angular/core';
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input()
  product: Product;

  constructor(private productsService: ProductsService){

  }

  save(): void {
    this.productsService.update(this.product)
      .subscribe(
        response => {console.log(response)},
        err => { console.log(err)});
  }

}
