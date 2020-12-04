import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courses = this.coursesService.courses;
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }

    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  saveCourse() {
    console.log('SAVE COURSE!');
  }

  deleteCourse(courseId) {
    console.log('COURSE DELETED!', courseId);
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
