import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})

export class ProfileComponent implements OnInit {

	complaints;

  	constructor(private service: ClinicService, private router: Router) {

  	}

  	ngOnInit() {
  		if (sessionStorage.getItem('patientEmail') == null) {
  			this.router.navigate(['/login']);
  		}
  		else {
  			this.getComplaints();
  		}
  	}

  	getComplaints() {

  		let data = {
  			email: sessionStorage.getItem('patientEmail')
  		}

  		this.service.myComplaints(data).subscribe(res => {
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				this.complaints = res.data;
  			}
  		})
  	}
}
