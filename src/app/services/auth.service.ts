import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData={
    name:'',
    admin:false
  };
  isLogged=false;

  constructor() { }

  login(isAdmin){
    this.isLogged=true;
    if(isAdmin){
      this.userData={name:'Administrator',admin:true};
    }else {
      this.userData={name:'User',admin:false};
    }
  }
}
