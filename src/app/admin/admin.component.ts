import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClinicService } from '../clinic.service';
// import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})

export class AdminComponent implements OnInit {

	appointments;
  error;

  constructor(private builder: FormBuilder,  
              private router: Router,
              private service: ClinicService) { }

  ngOnInit() {

  	if (sessionStorage.getItem("adminEmail") == null) {
          this.router.navigate(['/admin-login']);
    }
    else {
        this.getAppointments();
    }
  }

  getAppointments() {
    this.service.appointments().subscribe(res => {
      if (res.error) {
        this.error = res.errorMessage;
      }
      else {
        this.appointments = res.data;
      }
    });
  }


  approve(id, event) {
    event.preventDefault();

    let data = {
      id: id
    }

    this.service.approve(data).subscribe(res => {
      if (res.error) {
        alert(res.errorMessage);
      }
      else {
        alert(res.message);
        location.reload();
      }
    })
  }

  decline(id, event) {
    let data = {
      id: id
    }

    this.service.decline(data).subscribe(res => {
      if (res.error) {
        alert(res.errorMessage);
      }
      else {
        alert(res.message);
        location.reload();
      }
    })
  }
}
