import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

import { LoginComponent }      from './login/login.component';
import { MainComponent }   from './main/main.component';
import {AuthGuard} from "./service/auth-guard.service";



/**
 * app路由
 */
const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  {
     path: 'login',
     component: LoginComponent
  },
  {
     path: 'app',
     component: MainComponent,
     canActivate: [AuthGuard],
     loadChildren: 'app/main/main.module#MainModule'
  }
];

export const appRoutes=RouterModule.forRoot(routes,{preloadingStrategy: SelectivePreloadingStrategy,useHash:true});

