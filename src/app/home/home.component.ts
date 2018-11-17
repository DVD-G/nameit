import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public students = [
    {
      name: "Nate",
      status: "Signed In"
    },
    {
     name: "Noah",
     status: "Signed In"
   },{
     name: "Victor",
     status: "Signed In"
   },
   {
     name: "Pablo",
     status: "Signed In"
   },
   {
     name: "Julian",
     status: "Signed In"
   }
  ]

    checkout(){
      for(let item of this.students){
        if(item.status==="Signed In"){
          item.status="Signed Out";
      }else{
        item.status="Signed In";
      }
    }
  }
    

  constructor() { }

  ngOnInit() {
    
  }

}
