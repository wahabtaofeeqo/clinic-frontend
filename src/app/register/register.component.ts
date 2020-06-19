import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})


export class RegisterComponent implements OnInit {

	createForm;

  	constructor(private builder: FormBuilder, private service: ClinicService, private router: Router) {
  		this.createForm = this.builder.group({
  			firstname: '',
          	lastname: '',
          	others: '',
          	email: '',
          	phone: '',
          	password: ''
  		})
  	}

  	ngOnInit() {
  		if (sessionStorage.getItem("patientEmail") != null) {
  			this.router.navigate(['/profile']);
  		}
  	}

  	register(data) {

        if (this.validate(data)) {
        	this.service.register(data).subscribe(res => {

	            if (res.error) {
	                alert(res.errorMessage);
	            }
	            else {
	              alert("Account Created Successfully");
	              this.createForm.reset();
	              this.router.navigate(['/login']);
	            }
	        });
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
