import { Component, Output, NgModule, OnInit } from '@angular/core'

import { Menus } from '../../mock/menu'

//源信息
@Component({
    selector:'adm-menu',
    templateUrl:'./menu.component.html',
    styleUrls:['./menu.component.css']
})

@NgModule({
    providers:[

    ]
})

//导出组件
export class Menu implements OnInit{
	menus = Menus;
    //生命周期-初始化
    ngOnInit(){

    }
}