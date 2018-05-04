import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//组件
import { Login } from '../Login/login.component'

const routes: Routes = [
  {path:'',component:Login}
]

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports:[ RouterModule ],
//   // declarations: []
// })


// export class AppRoutingModule { }
export const appRouter = RouterModule.forRoot(routes);