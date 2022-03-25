import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // 
  { path: 'home', component: HomeComponent, }, // 
  { path: 'list', component: ListComponent, }, // 
  { path: 'intro', component: IntroComponent, }, // 
  { path: 'about', component: AboutComponent, }, //
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // 
];

export const AppRoutingModule = RouterModule.forRoot(routes, {useHash: true});