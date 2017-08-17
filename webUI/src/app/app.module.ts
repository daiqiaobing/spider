import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



//app
import { appRoutes } from './app.routes';
import { AppComponent }    from './app.component';
import { AppService }   from './app.service';


//toast
import {ToastService} from './shared/toast/toast.service';
import {ToastBoxComponent} from './shared/toast/toast-box.component';
import {ToastComponent} from './shared/toast/toast.component';

//http
import { HttpService }   from './shared/http/http.service';


//spin
import { SpinComponent} from './shared/spin/spin.component';
import { SpinService } from './shared/spin/spin.service';


//modules
import  { LoginModule }      from './login/login.module';
import  { MainModule }       from './main/main.module';

import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";
import {LoginService} from "./service/login.service";
import {UserInfoService} from "./service/user-info.service";
import {AuthGuard} from "./service/auth-guard.service";
import {ApiRequestService} from "./service/api-request.service";
import {AppConfig} from "./app-config";






/**
 * app模块
 */
@NgModule({
  imports: [
    appRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MainModule,
    LoginModule
  ],
  declarations: [
    AppComponent,
    ToastBoxComponent,
    ToastComponent,
    SpinComponent
  ],
  providers: [
    AppService,
    ToastService,
    HttpService,
    SpinService,
    SelectivePreloadingStrategy,
    LoginService,
    UserInfoService,
    AuthGuard,
    ApiRequestService,
    AppConfig
  ],
  exports:[
    ToastBoxComponent,
    SpinComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
