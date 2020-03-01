import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  signup(formValue){
    Swal.fire('Success','thank you for signing in','success')
  }

}
