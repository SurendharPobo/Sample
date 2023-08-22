import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent implements OnInit {

  CourseId:number;

  Courses=[
    {'id': 1, 'Name':'Full Stack', 'Description': 'A Full-Stack developer is a professional responsible for working on both front-end and back-end development processes.'},
    {'id': 2, 'Name':'ROR', 'Description': 'Ruby on Rails developers usually develop back-end components, connect the application with the other (often third-party) web services, and support the front-end developers by integrating their work with the application.'},
    {'id': 3, 'Name':'Angular', 'Description': 'An Angular developer is a highly skilled individual who can efficiently code for adapting interfaces for modern internet applications.'},
    {'id': 4, 'Name':'Flutter', 'Description': 'Flutter Developer is responsible for running and designing product application features across multiple devices across platforms.'}
  ]

  GetCourseId(event){
    this.CourseId=event;
  }

  constructor() { }

  ngOnInit(): void {
  } 

}
