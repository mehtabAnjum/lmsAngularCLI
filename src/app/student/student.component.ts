import { Component, OnInit } from '@angular/core';
import {CourseService} from "../course.service";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList;
  courseList;
  batchList;

  constructor(private stdata: StudentService, private cdata: CourseService) {
    this.studentList=[]
  }

  ngOnInit() {
    this.stdata.getStudents()
      .subscribe((res) => {
        this.studentList = res;
      })

    this.cdata.getCourses()
      .subscribe((res)=>{
        this.courseList = res;
        console.log(this.courseList);
      })
  }

  getBatches(cid:number){
    console.log(cid);
    this.cdata.getBatches(cid)
      .subscribe((res)=>{
        this.batchList = res;
        console.log(this.batchList);
      })
  }

  searchStudentById(sid:number){
    console.log(sid);
    this.stdata.getStudentById(sid)
      .subscribe((res)=>{

        console.log(this.studentList)
        this.studentList=[]
        this.studentList.push(res);
      })
  }

  addStudent(name: string,cid:number,bid:number) {
    console.log(name)
    console.log(cid)
    console.log(bid)
    let newStudent = {
      'name': name,
      'cid': cid,
      'bid':bid
    }
    this.stdata.postStudent(newStudent)
      .subscribe((res) => {
        console.log(res)
      })
  }


}
