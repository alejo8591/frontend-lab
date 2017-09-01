import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryProductService} from "./mocks/in-memory-product.service";

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import {ProductsService} from "./services/products.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProductService)
  ],
  providers: [InMemoryProductService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
