import { Component, Input, Output, NgModule, OnInit } from '@angular/core'

@Component({
  selector:'adm-usestatic',
  templateUrl:'./usestatic.component.html',
  styleUrls:['./usestatic.component.css']
})

@NgModule({
  imports:[],
  exports:[],
  providers:[]
})

export class UseStatic implements OnInit{
  pieChart = {
    series:[
      {
        "center":['50%','50%'],
        'type':'pie',
        'radius':[35,40],
        'clockWise':true,
        'selectedMode':null,
        label:{
          show:true,
          position:'center',
          formatter:function(){
            return '70%'
          }
        },
        data:[
          {name:'test',value:70,itemStyle:{
            color:'#07D5B9'
          }},
          {name:'test1',value:33,itemStyle:{
            color:'#b7b7b7'
          },label:{show:false}}
        ]
      }
    ]
  };
  
    
  ngOnInit(){
    // this.myChart.setOption(this.option)
    console.log('数据中心',this)
  }
}