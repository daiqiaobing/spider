import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserInfoService} from "./user-info.service";
import {LoginService} from "./login.service";

@Injectable()
export class AuthGuard implements  CanActivate, CanActivateChild {
      constructor(
        private router: Router,
        private userInfoService: UserInfoService,
        private loginService:LoginService
    ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url)
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }

  checkLogin(url: string):boolean{
        if(this.userInfoService.isLoggedIn()){
          return true;
        }
        this.loginService.landingPage = url;
        this.router.navigate(['login'])
        return false;
  }

}
