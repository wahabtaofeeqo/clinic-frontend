import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.sass']
})
export class AppointmentsComponent implements OnInit {

  appointments

  constructor(private service: ClinicService, private router: Router, private builder: FormBuilder) {}

  ngOnInit() {
    if (sessionStorage.getItem("patientEmail") == null) {
       this.router.navigate(['/login']);
    }
    else {
       this.getAppointments();
    }
  }

  getAppointments() {

    let data = {
      email: sessionStorage.getItem("patientEmail")
    }

    this.service.myAppointments(data).subscribe(res => {
      if (res.error) {
         alert(res.errorMessage);
      }
      else {
        this.appointments = res.data;
      }
    })
  }
}