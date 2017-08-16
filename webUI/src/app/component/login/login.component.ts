import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from '../../service/auth.service';
import {isBoolean} from "util";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['/login.component.scss']
})
export class LoginComponent {
  model: any = {}
  message: string;
  welcomeMsg:string = "Enter your username and password to login:";

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = '';
  }

  login() {
    this.welcomeMsg = ''
    this.message = '正在登陆中...........';
    this.authService.login(this.model.username, this.model.password);
    if(this.authService.isLoggedIn){
         let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
          let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.message = redirect;
        this.router.navigate([redirect], navigationExtras);
         this.message = "Success login!";
    }else{
          this.welcomeMsg = "Enter your username and password to login:";
    }
   }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
