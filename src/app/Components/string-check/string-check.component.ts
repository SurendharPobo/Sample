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
  letter='';

  constructor() { }



  ngOnInit(): void {
  }

  ngDoCheck(): void {
    var ml = this.MatchName.length;
    var sl = this.StringName.length;
    for (let i = 0; i <= ml - 1; i++) {
      if (ml <= sl) {
        if (this.MatchName[i] == this.StringName[i]) {
          this.letter=this.MatchName[i];
          this.text = ("Letter Match");
        }
        else {
          this.text = ("Letter Doesn't Match");
        }
      }
      else {
        this.text = ("Letter Doesn't Match");
      }
    }
    if (this.MatchName == this.StringName) {
      this.match = ("Name Matched");
      document.getElementById("str").style.color = "Green";
    }
    else {
      this.match = ("Name doesn't match");
      document.getElementById("str").style.color = "Red";
    }
  }
}