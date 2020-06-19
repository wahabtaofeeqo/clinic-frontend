import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.sass']
})
export class BookAppointmentComponent implements OnInit {

  	appointmentForm;

  	constructor(private service: ClinicService, private router: Router, private builder: FormBuilder) {
  		this.appointmentForm = this.builder.group({
  			date: '',
  			reason: ''
  		})
  	}

  	ngOnInit() {}

  	processForm(data) {
  		if (data.date != "" && data.reason != "") {

  			let d = {
  				email: sessionStorage.getItem("patientEmail"),
  				date: data.date,
  				reason: data.reason
  			}

  			this.service.book(d).subscribe(res => {
  				if (res.error) {
  					alert(res.errorMessage);
  				}
  				else {

  					alert(res.message);
  					this.appointmentForm.reset();
  				}
  			})
  		}
  	}

}
