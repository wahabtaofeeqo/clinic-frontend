import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-complain',
  templateUrl: './log-complain.component.html',
  styleUrls: ['./log-complain.component.sass']
})
export class LogComplainComponent implements OnInit {

  	complainForm;

  	constructor(private service: ClinicService, private router: Router, private builder: FormBuilder) {
  		this.complainForm = this.builder.group({
  			subject: '',
  			message: ''
  		})
  	}

  	ngOnInit() {}

  	processForm(data) {
  		if (data.subject != "" && data.message != "") {

  			let d = {
  				email: sessionStorage.getItem("patientEmail"),
  				subject: data.subject,
  				message: data.message
  			}

  			this.service.lodge(d).subscribe(res => {
  				if (res.error) {
  					alert(res.errorMessage);
  				}
  				else {

  					alert(res.message);
  					this.complainForm.reset();
  				}
  			})
  		}
  	}

}
