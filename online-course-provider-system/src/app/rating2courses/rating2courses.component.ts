import { Component, OnInit } from '@angular/core';
import { MERN_Stack_Courses } from '../Courses';
import { MERNStackService } from '../mern-stack-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating2courses',
  templateUrl: './rating2courses.component.html',
  styleUrls: ['./rating2courses.component.css']
})
export class Rating2coursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_rating2_courses: MERN_Stack_Courses[] = [];

  constructor(private mernstackService: MERNStackService, private router: Router) { }

  ngOnInit()
  {
    this.getMERNCourses();
  }

  getMERNCourses(): void
  {

  }

}
