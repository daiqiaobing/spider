import {
  NgModule
} from '@angular/core';
import { RouterModule, Route }   from '@angular/router';
import { GundamDetailComponent } from './component/detail/gundam-detail.component';
import { GundamHostComponent } from './component/host/gundam-host.component';
import {AuthGuard} from "./service/auth-guard.service";
import {LoginComponent} from "./component/login/login.component";

const routes: Route[] = [
    {
      path: 'home',
      component: GundamHostComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '' , component: GundamDetailComponent}
      ]
    },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  })

export class AppRoutingModule {

}
