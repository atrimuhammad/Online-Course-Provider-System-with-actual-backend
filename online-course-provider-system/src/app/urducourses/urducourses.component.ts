import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../Courses';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-urducourses',
  templateUrl: './urducourses.component.html',
  styleUrls: ['./urducourses.component.css']
})
export class UrducoursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_urdu_courses: MERN_Stack_Courses[] = [];

  constructor(private mernstackService: MERNStackService, private router: Router) { }

  ngOnInit()
  {
    this.getMERNCourses();
  }

  getMERNCourses(): void
  {

  }

}
