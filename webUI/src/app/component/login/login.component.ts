import {Component, OnInit} from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from '../../service/auth.service';
import {User} from "../../model/user.model";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['/login.component.scss']
})
export class LoginComponent implements OnInit{
  username:string;
  ngOnInit(): void {
     this.username = "zhangsan";
  }
  model: User = <User>{
    username: "admin",
    password: "admin"
  };
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

    if(this.authService.login(this.model.username, this.model.password)){
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
      let navigationExtras: NavigationExtras = {
        queryParamsHandling: 'preserve',
        preserveFragment: true
      };

      this.message = redirect;
      this.message = "Success login!";
      this.router.navigate([redirect], navigationExtras);
    }

    if(this.authService.isLoggedIn){
         this.authService.toLocaleString();
         let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
          let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.message = redirect;
        this.router.navigate([redirect], navigationExtras);
         this.message = "Success login!";
    }else{
        this.message = "请重新登录！"+this.model.username;
         this.welcomeMsg = "Enter your username and password to login:";
    }
   }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
