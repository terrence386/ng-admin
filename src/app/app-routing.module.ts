import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//组件
import { Layout } from '../components/layout/layout.component'
import { Login } from '../Login/login.component'
import { DataCenter } from '../components/dataCenter/datacenter.component'

const routes: Routes = [
  {path:'',component:Login},
  {	path:'index',
  	component:Layout,
  	children:[
  		{
  			path:'',
  			component:DataCenter
  		}
  		
  	]
  }
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