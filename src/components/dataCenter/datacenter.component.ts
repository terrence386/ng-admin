import { Component ,Input, Output, NgModule, OnInit } from '@angular/core';

@Component({
	selector:'adm-datacenter',
	templateUrl:'./datacenter.component.html',
	styleUrls:['./datacenter.component.css']
})

@NgModule({
	imports:[],
	exports:[],
	providers:[]
})

//导出组件
export class DataCenter implements OnInit{
    //生命周期-初始化
    ngOnInit(){

    }
}