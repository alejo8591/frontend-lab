import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../pages/home/home.component";
import {AboutComponent} from "../pages/about/about.component";
import {PageOneComponent} from "../pages/page-one/page-one.component";
import {PageTwoComponent} from "../pages/page-two/page-two.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component:  HomeComponent},
  { path: 'about',  component:  AboutComponent},
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
