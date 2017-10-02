import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryProductService} from "../services/in-memory-data-api.service";
import {ProductsService} from "../services/products.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProductService)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
