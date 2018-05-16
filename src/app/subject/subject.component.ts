import { Component, OnInit } from '@angular/core';
import {CourseService} from "../course.service";
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjectlist;
  courselist;

  constructor(private sdata: SubjectService, private cdata: CourseService) { }

  ngOnInit() {
    this.sdata.getSubjects()
      .subscribe((res) => {
        this.subjectlist = res;
        console.log(this.subjectlist)
      })

    this.cdata.getCourses()
      .subscribe((res) => {
        this.courselist = res;
        console.log(this.courselist)
      })
  }
  addSubject(name: string, cid: number) {
    console.log(name);
    console.log(cid);
    let newSubject = {
      'name': name,
    }
    this.sdata.postSubject(newSubject,cid)
      .subscribe((res) => {
        console.log(res);
      })
  }


}
