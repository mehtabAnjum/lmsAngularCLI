import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  BASE_URL = 'https://lms-mehtab.herokuapp.com/subjects';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };

  constructor(private http: HttpClient) { }

  getSubjects() {
    return this.http.get(this.BASE_URL);
  }

  postSubject(newSubject,cid) {
    return this.http.post(this.BASE_URL+"/courses/"+cid, newSubject, this.httpOptions)
  }
}
