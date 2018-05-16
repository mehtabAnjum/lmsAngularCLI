import {Component, OnInit} from '@angular/core';
import {CourseService} from "../course.service";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  studentList;
  courseList;
  batchList;
  cid;
  courseName;
  bid;
  batchName;
  batchpage: boolean = false;
  coursepage: boolean = true;
  studentpage: boolean = false;

  constructor(private data: CourseService , private stdata : StudentService) {
  }

  ngOnInit() {
    this.data.getCourses()
      .subscribe((res) => {
        console.log("hello")
        console.log(res);
        this.courseList = res;
      })
  }

  addCourse(name: string) {
    console.log(name)
    this.data.postCourse(name)
      .subscribe((res) => {
        console.log(res)
      })
  }

  getBatches(cid: number, courseName: string) {
    this.courseName = courseName;
    this.cid = cid;
    this.batchpage = true;
    this.coursepage = false;
    this.data.getBatches(cid)
      .subscribe((res) => {
        this.batchList = res;
        console.log(this.batchList);
      })
  }

  addBatch(batchName: string) {
    this.data.postBatch(batchName, this.cid)
      .subscribe((res) => {
        console.log(res);
      })
  }

  getBatchStudents(bid: number,batchName:string) {
    this.batchpage = false;
    this.batchName = batchName;
    this.coursepage = false;
    this.studentpage = true;
    this.bid = bid;
    this.data.getBatchStudents(this.cid, this.bid)
      .subscribe((res) => {
        this.studentList = res[0].students;
        console.log(this.studentList);
      })
  }

  addStudentToBatch(studentName : string){
    let newStudent={
      'cid' : this.cid,
      'bid' : this.bid,
      'name' : studentName,
    }
    this.stdata.postStudent(newStudent)
      .subscribe((res)=>{
        console.log(res);
      })
    this.ngOnInit();
  }

}
