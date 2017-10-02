import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryProductService} from "../services/in-memory-data-api.service";
import {ProductsService} from "../services/products.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
=======
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import {ProductsService} from "./service/products.service";
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    HomeComponent
>>>>>>> e60bdf74bc08c784383856b05244b7962ced7c31
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProductService)
  ],
  providers: [ProductsService],
=======
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    {
      provide: APP_BASE_HREF, useValue : '/'
    }
  ],
>>>>>>> e60bdf74bc08c784383856b05244b7962ced7c31
  bootstrap: [AppComponent]
})
export class AppModule { }
