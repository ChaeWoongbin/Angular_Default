import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { ListComponent } from './list/list.component';
import { ListHomeComponent } from './list/list-home/list-home.component';
import { ListDashboardComponent } from './list/list-dashboard/list-dashboard.component';
import { ListOrdersComponent } from './list/list-orders/list-orders.component';
import { ListProductsComponent } from './list/list-products/list-products.component';
import { JoinnowComponent } from './joinnow/joinnow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    IntroComponent,
    ListComponent,
    ListHomeComponent,
    ListDashboardComponent,
    ListOrdersComponent,
    ListProductsComponent,
    JoinnowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
