import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  list():Course[]{
    return [{_id:'1',name:'angular',category:'backend'}];
  }
}
