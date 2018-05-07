import { Component, Input, Output,NgModule, OnInit } from '@angular/core'

@Component({
  selector:'adm-usercount',
  templateUrl:'./usercount.component.html',
  styleUrls:['./usercount.component.css']
})

@NgModule({
  imports:[],
  exports:[],
  providers:[]
})

export class UserCount implements OnInit{
  usercount = {
    num:1800678
  }
  //生命周期-初始化
  ngOnInit(){

  }
}

