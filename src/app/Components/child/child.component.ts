import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {

  CourseId: number;

  @Input() CoursesData = [];
  getCourseId(event) {
    return this.CourseId = event.target.value;
  }

  @Output("change") PassCourseId = new EventEmitter<number>();

  clickId(){
    return this.PassCourseId.emit(this.CourseId);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
