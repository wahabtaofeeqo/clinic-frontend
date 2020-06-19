import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.sass']
})

export class ViewProfileComponent implements OnInit {

	details;
	editForm;
	id;

  	constructor(private service: ClinicService, private router: Router, private builder: FormBuilder) {

  		this.editForm = this.builder.group({
  			firstname: '',
  			lastname: '',
          	others: '',
          	email: '',
          	phone: ''
  		});
  	}

  	ngOnInit() {
  		if (sessionStorage.getItem('patientEmail') == null) {
  			this.router.navigate(['/login']);
  		}
  		else {
  			this.getDetails();
  		}
  	}

  	getDetails() {
  		let data = {
  			email: sessionStorage.getItem('patientEmail')
  		}

  		this.service.myDetails(data).subscribe(res => {
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {

  				this.id = res.data.id;
  				this.details = res.data;
  			}
  		})
  	}

  	processForm(data) {

  		let d = {
  			firstname: data.firstname,
  			lastname: data.lastname,
  			others: data.others,
  			email: data.email,
  			phone: data.phone,
  			id: this.id
  		};

  		if (this.validate(d) && this.id != null) {
  			this.service.updateProfile(d).subscribe(res => {
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

  	validate(data) {

    	if (data.firstname == "") {
    		return false;
    	}

    	if (data.lastname == "") {
    		return false;
    	}

    	if (data.others == "") {
    		return false;
    	}

    	if (data.email == "") {
    		return false;
    	}


    	if (data.phone == "") {
    		return false;
    	}

    	if (data.password == "") {
    		return false;
    	}

    	return true;
    }
}
