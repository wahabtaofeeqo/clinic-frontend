import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-complaints',
  templateUrl: './admin-complaints.component.html',
  styleUrls: ['./admin-complaints.component.sass']
})

export class AdminComplaintsComponent implements OnInit {

	complaints;

  	constructor(private service: ClinicService, private router: Router) {

  	}

  	ngOnInit() {
  		if (sessionStorage.getItem('adminEmail') == null) {
  			this.router.navigate(['/admin-login']);
  		}
  		else {
  			this.getComplaints();
  		}
  	}

  	getComplaints() {

  		this.service.complaints().subscribe(res => {
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				this.complaints = res.data;
  			}
  		})
  	}
}
