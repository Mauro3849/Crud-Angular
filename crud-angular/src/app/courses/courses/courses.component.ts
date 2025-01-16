import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../service/courses.service';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses:Course[]=[];
  displayedColumns=['name','category'];



  constructor(private coursesService:CoursesService) {

    this.courses=this.coursesService.list();
  }

  ngOnInit(): void {
  }

}
