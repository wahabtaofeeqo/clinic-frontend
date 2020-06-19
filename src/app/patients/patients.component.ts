import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.sass']
})


export class PatientsComponent implements OnInit {

	patients;

  	constructor(private router: Router, private service: ClinicService) { }

  	ngOnInit() {
  		if (sessionStorage.getItem("adminEmail") == null) {
  			this.router.navigate(['/admin-login']);
  		}
  		else {
  			this.getPatients();
  		}
  	}

  	getPatients() {
  		this.service.patients().subscribe(res => {
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				this.patients = res.data;
  			}
  		})
  	}
}
