import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//路由
import { RouterModule }   from '@angular/router';
import { appRouter } from './app-routing.module';
import { Layout } from '../components/layout/layout.component'
import { Login } from '../Login/login.component'
import { Avator } from '../components/avator/avator.component'
import { LoginOut } from '../components/loginOut/loginout.component'
import { Menu } from '../components/menu/menu.component'
import { DataCenter } from '../components/dataCenter/datacenter.component'
import { UserCount }  from '../components/dataCenter/usercount/usercount.component'
import { Account } from '../components/dataCenter/account/account.component'
import { UseStatic } from '../components/dataCenter/usestatic/usestatic.component'
import { EChartOptionDirective1 } from '../components/dataCenter/usestatic/echart-optoin.directive'




@NgModule({
  declarations: [
    AppComponent,
    Login,
    Layout,
    Avator,
    LoginOut,
    Menu,
    DataCenter,
    UserCount,
    Account,
    UseStatic,
    EChartOptionDirective1
    // AppRoutingModule,
    
  ],
  imports: [
    BrowserModule,
    appRouter,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
