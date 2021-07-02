import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../Courses';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-rating3courses',
  templateUrl: './rating3courses.component.html',
  styleUrls: ['./rating3courses.component.css']
})
export class Rating3coursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_rating3_courses: MERN_Stack_Courses[] = [];

  constructor(private mernstackService: MERNStackService, private router: Router) { }

  ngOnInit()
  {
    this.getMERNCourses();
  }

  getMERNCourses(): void
  {

  }

}
