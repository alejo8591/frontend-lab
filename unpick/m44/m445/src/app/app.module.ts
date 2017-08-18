import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "../routing/app-routing.module";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {APP_BASE_HREF} from "@angular/common";
import {PageOneComponent} from "../pages/page-one/page-one.component";
import {AboutComponent} from "../pages/about/about.component";
import {HomeComponent} from "../pages/home/home.component";
import {PageTwoComponent} from "../pages/page-two/page-two.component";

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue : '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
