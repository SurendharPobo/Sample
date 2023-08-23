import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  name='Surendhar';


  updateUserInfo: any;

  count=0;
  click(){
    this.count++;
  }

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getNewUserInfo().subscribe(info => {
      this.updateUserInfo = info;
    })
  }
}
