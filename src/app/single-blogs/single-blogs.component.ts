/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-blogs',
  templateUrl: './single-blogs.component.html',
  styleUrls: ['./single-blogs.component.css']
})
export class SingleBlogComponent implements OnInit {
  public id;
  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((result) => {
      console.log(result.id);
      this.id = result.id;
    });
  }

}*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-blogs',
  templateUrl: './single-blogs.component.html',
  styleUrls: ['./single-blogs.component.css']
})
export class SingleBlogComponent implements OnInit {
  public id;
  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((result) => {
      console.log(result.id);
      this.id = result.id;
    });
  }

}