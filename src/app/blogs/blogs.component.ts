import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
    public journals = [
      {
        title:'journal 1',
        content:'asidosaunosa'
      },
      {
        title:'journal 2',
        content:'mklkmldlgrkm'
      }
    ];
    public form: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['',Validators.required]
    });
  }

  onSubmit(){
    this.journals.push(this.form.value);
    console.log(this.journals);
    console.log('hey Im submitting');
  }
};
