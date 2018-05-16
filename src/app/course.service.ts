import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  BASE_URL = 'https://lms-mehtab.herokuapp.com/courses';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };
  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(this.BASE_URL);
  }

  getBatches(cid:number){
    return this.http.get(this.BASE_URL+"/"+cid+"/batches");
  }

  postCourse(coursename: string) {
    let cname = {
      'name': coursename
    }
    return this.http.post(this.BASE_URL, cname, this.httpOptions)
  }

  postBatch(batchName:string, cid:number){
    let bname={
      'name' : batchName
    }
    return this.http.post(this.BASE_URL+"/"+cid+"/batches",bname,this.httpOptions)
  }

  getBatchStudents(cid:number, bid:number){
    return this.http.get(this.BASE_URL+"/"+cid+"/batches/"+bid+"/students");
  }

}
