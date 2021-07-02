import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../Courses';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-intermediatecourses',
  templateUrl: './intermediatecourses.component.html',
  styleUrls: ['./intermediatecourses.component.css']
})
export class IntermediatecoursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_intermediate_courses: MERN_Stack_Courses[] = [];

  constructor(private mernstackService: MERNStackService, private router: Router) { }

  ngOnInit()
  {
    this.getMERNCourses();
  }

  getMERNCourses(): void
  {

  }

}
