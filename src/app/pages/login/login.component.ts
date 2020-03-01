import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  login(formValue){
    Swal.fire('Success','Welcome back','success')
    .then(()=>{
      this.router.navigate(["/"]);
    })
  }

}
