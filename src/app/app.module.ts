import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BallComponent } from './ball/ball.component'
import { HttpClientModule } from '@angular/common/http';
import { SingleBlogComponent } from './single-blogs/single-blogs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    AboutComponent,
    ContactsComponent,
    BallComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
