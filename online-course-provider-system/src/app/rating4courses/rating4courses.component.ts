import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../Courses';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-rating4courses',
  templateUrl: './rating4courses.component.html',
  styleUrls: ['./rating4courses.component.css']
})
export class Rating4coursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_rating4_courses: MERN_Stack_Courses[] = [];

  constructor(private mernstackService: MERNStackService, private router: Router) { }

  ngOnInit()
  {
    this.getMERNCourses();
  }

  getMERNCourses(): void
  {

  }

}
