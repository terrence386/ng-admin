import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//路由
import { RouterModule }   from '@angular/router';
import { appRouter } from './app-routing.module';
import { Login } from '../Login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    Login
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
