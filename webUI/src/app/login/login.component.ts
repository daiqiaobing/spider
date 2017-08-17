import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../shared/http/http.service';

import { ToastService } from '../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../shared/toast/toast-model';
import {LoginService} from "../service/login.service";
import {UserInfoService} from "../service/user-info.service";


@Component({
  selector: 'c-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  /**
   * 初始化
   */
  ngOnInit() {

  }

  constructor(private router: Router, private toastService: ToastService,private loginService:UserInfoService, private httpService: HttpService) { }



  /**
   * 登录
   */
  login() {
    let that = this;
    /*this.httpService.post("http://192.168.1.107:8080/cjhme/user/login.jhtml", {
      userName: 'admin',
      password: '123456'
    }, function (successful, data, res) {
      console.info(successful);
      console.info(data);
      console.info(res);
      if (successful) {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '百变小咖，登录成功!', 3000);
        that.toastService.toast(toastCfg);
        that.router.navigate(['/app/home']);
      }
    }, function (successful, msg, err) {
       const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
       that.toastService.toast(toastCfg);
    });*/
    this.loginService.storeUserInfo("user");
    const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '百变小咖，登录成功!', 2000);
    this.toastService.toast(toastCfg);
    this.router.navigate(['/app/home']);
  }


}
