
import {AuthService} from "./auth.service";
import {Injectable} from "_@angular_core@4.3.4@@angular/core/src/di";
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "_@angular_router@4.3.4@@angular/router/src";
import {Observable} from "_rxjs@5.4.3@rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate , CanActivateChild{

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
      return true;
  }

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
