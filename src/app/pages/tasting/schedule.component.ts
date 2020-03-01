import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styles: []
})
export class ScheduleComponent implements OnInit {
  mytime: Date = new Date();
  constructor(public router:Router) { }

  ngOnInit() {
  }

  schedule(formValue){
    Swal.fire("Success","Your appointment has been scheduled, bring this code to get your 20% discount: AURY1456","success")
    .then(()=>{
      this.router.navigate(["/"]);
    })
  }

}
