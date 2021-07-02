import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../Courses';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-englishcourses',
  templateUrl: './englishcourses.component.html',
  styleUrls: ['./englishcourses.component.css']
})
export class EnglishcoursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_english_courses: MERN_Stack_Courses[] = [];

  constructor(private mernstackService: MERNStackService, private router: Router) { }

  ngOnInit()
  {
    this.getMERNCourses();
  }

  getMERNCourses(): void
  {
  
  }

}
