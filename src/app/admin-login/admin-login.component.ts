import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.sass']
})

export class AdminLoginComponent implements OnInit {

	loginForm;
  	constructor(private builder: FormBuilder, 
                private service: ClinicService,
                private router: Router) { 

  		this.loginForm = this.builder.group({
  			username: ['', Validators.required],
  			password: ['', Validators.required]
  		});
  	}

  	ngOnInit() {
  		
  	}

  	processLogin(data) {
  		if (data.username != "" && data.password != "") {
  			this.service.adminLogin(data).subscribe(res => {
  			
	  			if (res.error) {
	  				alert(res.errorMessage);
	  			}
	  			else {

	  				sessionStorage.setItem("adminEmail", data.username);
	  				alert("Login Successful");
	  				this.router.navigate(['/admin']);
	  			}
	  		})
  		}
  	}
}
