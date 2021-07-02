import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MERN_Stack_Courses } from '../Courses';
import { MERNStackService } from '../mern-stack-service';

@Component({
  selector: 'app-beginnercourses',
  templateUrl: './beginnercourses.component.html',
  styleUrls: ['./beginnercourses.component.css']
})
export class BeginnercoursesComponent implements OnInit {

  merncourses: MERN_Stack_Courses[] = [];

  mern_beginner_courses: MERN_Stack_Courses[] = [];

  constructor(private mernstackService: MERNStackService, private router: Router) { }

  ngOnInit()
  {
    this.getMERNCourses();
  }

  getMERNCourses(): void
  {
    
  }
}
