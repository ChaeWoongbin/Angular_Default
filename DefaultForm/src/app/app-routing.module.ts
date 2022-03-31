import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { ListDashboardComponent } from './list/list-dashboard/list-dashboard.component';
import { ListHomeComponent } from './list/list-home/list-home.component';
import { ListOrdersComponent } from './list/list-orders/list-orders.component';
import { ListProductsComponent } from './list/list-products/list-products.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // 
  { path: 'home', component: HomeComponent,  }, // 
  { path: 'intro', component: IntroComponent, }, // 
  { path: 'joinnow', component: JoinnowComponent,  }, // 
  { path: 'about', component: AboutComponent, }, //

  
  { path: 'list', component: ListComponent, }, // 
  { path: 'dashboard', component: ListDashboardComponent, outlet: "sidebar" , }, // 
  { path: 'home', component: ListHomeComponent, outlet: "sidebar" , }, // 
  { path: 'orders', component: ListOrdersComponent, outlet: "sidebar" , }, // 
  { path: 'products', component: ListProductsComponent, outlet: "sidebar" , }, // 

  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // 
];

export const AppRoutingModule = RouterModule.forRoot(routes, {useHash: true});