import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SalesInvoiceComponent } from './pages/sales-invoice/sales-invoice.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SalesInvoiceDetailComponent } from './pages/sales-invoice-detail/sales-invoice-detail.component';
import {ProductsService} from "./services/products.service";
import {CustomersService} from "./services/customers.service";
import {SalesInvoiceService} from "./services/sales-invoice.service";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    SalesInvoiceComponent,
    HomeComponent,
    ProductDetailComponent,
    SalesInvoiceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue : '/'
    },
    CustomersService,
    ProductsService,
    SalesInvoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
