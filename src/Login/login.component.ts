import { Component, Input, Output, NgModule, OnInit } from '@angular/core'

//源信息
@Component({
    selector:'adm-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

@NgModule({
    providers:[

    ]
})

//导出组件
export class Login implements OnInit{
    //生命周期-初始化
    ngOnInit(){

    }
    //登录方法
    public login():void {
        console.log('登录')
    }
}