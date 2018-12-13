/*import { Component, OnInit } from '@angular/core';
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

}*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public valid = true;
  public blogs = [];

  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    public router: Router
    ) { }

  ngOnInit() {
    this.getData();

    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  getData() {
    this.http.get('http://localhost:3000/getData')
      .subscribe((result: any) => {
        console.log(result);
        this.blogs = result.data;
      }, (err) => {
        console.log(err);
      });
  }

  onSubmit() {
    if (this.form.valid) {
      this.valid = true;
      this.sendData();
    } else {
      this.valid = false;
      console.log('erros');
    }
  }

  sendData() {
    this.submitted = true;

    this.http.post('http://localhost:3000/addNewBlog', this.form.value)
      .subscribe((result) => {
        this.submitted = false;
        this.form.reset();
        this.getData();
        console.log(result);
      }, (err) => {
        this.submitted = false;
        console.log(err);
      });
  }

  viewBlog(id) {
    console.log(id);
    this.router.navigate(['/blogs', id]);
  }

}
