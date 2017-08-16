import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }    from './component/common/not-found.component';
import { CanDeactivateGuard }       from './service/can-deactivate-guard.service';
import { AuthGuard }                from './service/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/component/common/home.module#HomeModule',
    canLoad: [AuthGuard],
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
  ]
})
export class AppRoutingModule { }
