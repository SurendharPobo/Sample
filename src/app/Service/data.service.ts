import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Fname="surendhar"

  private newUser = new BehaviorSubject({
    email: 'Surendharofficial@gmail.com',
    password : '123456'
  });

  setNewUserInfo(user: any) {
    this.newUser.next(user);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }


}
