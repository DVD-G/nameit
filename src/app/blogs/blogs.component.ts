/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public journals;
  public form: FormGroup;
  public user;

  constructor(public fb: FormBuilder, public http: HttpClient) { }

  post() {
    this.http.post('http://localhost:3000/beef', this.form.value).subscribe((result: any) => {
      console.log(result);
      this.journals = result;
    }),
      (err) => {
        console.log(err)
      };
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

    this.getData();
  }

  getData() {
    this.http.get('http://localhost:3000/chicken').subscribe((data) => {
      this.journals = data;

    }, (err) => {
      console.log(err);

    })
  }
  // onSubmit(){
  //   this.journals.push(this.form.value);
  //   console.log(this.journals);
  //   console.log('hey Im submitting');
  // }


};*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}