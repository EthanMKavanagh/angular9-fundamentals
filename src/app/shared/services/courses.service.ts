import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
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

  constructor() { }

  all() {
    return this.courses;
  }

  find(courseId) {

  }

  create(course) {
    console.log('CREATE COURSE', course);
  }

  update(course) {
    console.log('UPDATE COURSE', course);
  }

  delete(courseId) {
    console.log('DELETE COURSE', courseId);
  }
}
