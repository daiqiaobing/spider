import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../shared/http/http.service';

import { ToastService } from '../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../shared/toast/toast-model';
import {UserInfoService} from "../service/user-info.service";
import {Http} from "@angular/http";


@Component({
  selector: 'c-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    username:string;
    password:string;
  /**
   * 初始化
   */
  ngOnInit() {

  }

  constructor(
              private router: Router,
              private toastService: ToastService,
              private userService:UserInfoService,
              private httpService: HttpService,
              private http:Http
  ) { }



  /**
   * 登录
   */
  login() {
    let that = this;

    this.httpService.post("login", {
      username: this.username,
      password: this.password
    }, function (successful, data, res) {
      if (data.success == 'true') {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '百变小咖，登录成功!', 3000);
        that.userService.storeUserInfo(data.username);
        that.toastService.toast(toastCfg);
        that.router.navigate(['/app/home']);
      }else {
         const toastCfg = new ToastConfig(ToastType.INFO, '','登陆失败，请重新登陆！', 3000);
         that.toastService.toast(toastCfg);
      }
    }, function (successful, msg, err) {
       const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
       that.toastService.toast(toastCfg);
    });
  }


}
