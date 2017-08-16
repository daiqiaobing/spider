import { Injectable } from '@angular/core';

 import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username:string, password:string): boolean {
    if(username == "admin"&&password == "admin"){
       this.isLoggedIn = true;
       return true;
    }else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
