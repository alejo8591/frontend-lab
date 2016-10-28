import { Component, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/page-one.html'
})

export class ProductDetailComponent {
    @Input()
    product: Product;
}

