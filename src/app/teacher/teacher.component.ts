import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../subject.service";
import {TeacherService} from "../teacher.service";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  subjectList;
  teacherList;

  constructor(private sdata: SubjectService, private tdata: TeacherService) {
  }

  ngOnInit() {
    this.tdata.getTeachers()
      .subscribe((res) => {
        this.teacherList = res;
        console.log(this.teacherList)
      })

    this.sdata.getSubjects()
      .subscribe((res) => {
        this.subjectList = res;
        console.log(this.subjectList)
      })
  }

  addTeacher(name: string, sid: number) {
    console.log(name);
    console.log(sid);
    let newTeacher = {
      'name': name,
    }
    this.tdata.postTeacher(newTeacher, sid)
      .subscribe((res) => {
        console.log(res);
      })
  }


}
