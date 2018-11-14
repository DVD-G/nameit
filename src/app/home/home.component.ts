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
       status: false
     },
     {
      name: "Noah",
      status: false
    },{
      name: "Victor",
      status: false
    },
    {
      name: "Pablo",
      status: false
    },
    {
      name: "Julian",
      status: false
    }
   ]

    checkout(){
      for(let item of this.students){
        if(item.status===false){
          item.status=true;
      }else{
        item.status=false;
      }
    }
  }
    

  constructor() { }

  ngOnInit() {
    
  }

}
