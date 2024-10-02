import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { learningData } from '../data/learningApp.data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  private course:Course = learningData;
  constructor() { }

  getCourse(): Course{
    return this.course;
  }
}
