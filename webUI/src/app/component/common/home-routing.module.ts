import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }                from '../../service/auth-guard.service';
import {RootComponent} from "../root/root.component";

const adminRoutes: Routes = [
  {
    path: '',
    component: RootComponent,
    canActivate: [AuthGuard],
   /* children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      },
      {
        path: 'o',
        component: ManageCrisesComponent,
      },
      {
        path: 'ok',
        component: ManageCrisesComponent,
      }
    ]*/
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
