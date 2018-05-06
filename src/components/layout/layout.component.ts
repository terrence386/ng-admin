import { Component, Input, Output, NgModule, OnInit } from '@angular/core'
import { Avator } from '../avator/avator.component'
//源信息
@Component({
    selector:'adm-layout',
    templateUrl:'./layout.component.html',
    styleUrls:['./layout.component.css']
})

@NgModule({
	declarations:[
		Avator,
	],
	imports:[
		
	],
    providers:[

    ]
})

//导出组件
export class Layout implements OnInit{
    //生命周期-初始化
    ngOnInit(){

    }
}