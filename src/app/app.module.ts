import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import {HttpClientModule} from "@angular/common/http";
import {TeacherService} from "./teacher.service";
import {SubjectService} from "./subject.service";
import {StudentService} from "./student.service";
import {CourseService} from "./course.service";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TeacherComponent,
    SubjectComponent,
    HomeComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CourseService, StudentService, SubjectService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
