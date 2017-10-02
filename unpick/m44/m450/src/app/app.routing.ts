import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {CustomersComponent} from "./pages/customers/customers.component";
import {SalesInvoiceComponent} from "./pages/sales-invoice/sales-invoice.component";
import {SalesInvoiceDetailComponent} from "./pages/sales-invoice-detail/sales-invoice-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'sales-invoices', component: SalesInvoiceComponent },
  { path: 'sales-invoice/customer/detail/:id', component: SalesInvoiceDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
