import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = 'courses';
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 25,
      favorite: true
    },
    {
      id: 2,
      title: 'Vue Fundamentals',
      description: 'Learn the fundamentals of Vue',
      percentComplete: 0,
      favorite: false
    },
    {
      id: 3,
      title: 'React Fundamentals',
      description: 'Learn the fundamentals of React',
      percentComplete: 100,
      favorite: true
    }
  ];

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl());
  }

  find(courseId) {

  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    console.log('UPDATE COURSE', course);
  }

  delete(courseId) {
    console.log('DELETE COURSE', courseId);
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
}
