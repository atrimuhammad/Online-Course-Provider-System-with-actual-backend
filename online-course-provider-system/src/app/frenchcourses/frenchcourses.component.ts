import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../Courses';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-frenchcourses',
  templateUrl: './frenchcourses.component.html',
  styleUrls: ['./frenchcourses.component.css']
})
export class FrenchcoursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_french_courses: MERN_Stack_Courses[] = [];

  constructor(private mernstackService: MERNStackService, private router: Router) { }

  ngOnInit()
  {
    this.getMERNCourses();
  }

  getMERNCourses(): void
  {

  }

}
