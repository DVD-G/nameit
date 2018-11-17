import { Component, OnInit } from '@angular/core';
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

  constructor(public fb: FormBuilder, public http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

    this.getData();
  }

  getData() {
    this.http.get('http://localhost:3000/test').subscribe((data) => {
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


};
