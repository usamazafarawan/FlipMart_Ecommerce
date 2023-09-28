import { Injectable, OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: any[] = [];
  isUserValid = false;
  constructor() {
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
      console.log('this.users: ', this.users);
    }
  }

  sendvalue(value: any) {
    const data = this.users.find((user: any) => {
      return value.email === user.email && value.password === user.password;
    });
    if (data) {
       return  this.isUserValid = true;
    } else {
        return this.isUserValid =  false;
    }
    
  }

  isValid(): boolean {
    return this.isUserValid;

  }
  


}
