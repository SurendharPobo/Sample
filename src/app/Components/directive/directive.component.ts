import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  users = [
    { Fname: 'Surendhar', Age: 20, Gender: 'M' },
    { Fname: 'Riya', Age: 2, Gender: 'F' },
    { Fname: 'Suganya', Age: 26, Gender: 'F' },
    { Fname: 'Suresh', Age: 30, Gender: 'M' }
  ];

  Day = Date();

  Num = 12345678.123;

  Percentage = 0.56;

  Obj = {Name:'Surendhar', Age:21};

  constructor() { }

  ngOnInit(): void {
  }

}