import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-string-check',
  templateUrl: './string-check.component.html',
  styleUrls: ['./string-check.component.scss']
})
export class StringCheckComponent implements OnInit, DoCheck {

  StringName = 'Surendhar';
  MatchName = '';
  text = '';
  match = '';

  constructor() { }



  ngOnInit(): void {
  }

  ngDoCheck(): void {
    var ml=this.MatchName.length;
    var sl=this.StringName.length;
    for (let i = 0; i <= ml - 1; i++) {
      if (ml <= sl) {
        if (this.MatchName[i] == this.StringName[i]) {
          this.text = ("Letter Match");
        }
        else{
          this.text=("Letter Doesn't Match");
        }
      }
      else{
        this.text=("Letter Doesn't Match");
      }

    }
    if (this.MatchName == this.StringName) {
      this.match = ("Name Matched");
    }
    else {
      this.match = ("Name doesn't match");
    }
  }

}
