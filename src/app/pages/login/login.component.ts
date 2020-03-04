import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  email="";
  constructor(
    public router:Router,
    private authService:AuthService
    ) { }

  ngOnInit() {
  }

  login(formValue){
    console.log(formValue)
    if(formValue.email.toLowerCase()=="admin"){
      this.authService.login(true);
    }else {
      this.authService.login(false);
    }
    Swal.fire('Success','Welcome back','success')
    .then(()=>{
      this.router.navigate(["/"]);
    })
  }

}
