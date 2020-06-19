import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {

	  loginForm;

  	constructor(private builder: FormBuilder, 
                private service: ClinicService,
                private router: Router) {

  		this.loginForm = this.builder.group({

  			email: ['', Validators.required],
  			password: ['', Validators.required]
  		});
  	}

  	ngOnInit() {
      	if (sessionStorage.getItem("patientEmail") != null) {
            this.router.navigate(['/profile']);
        }
  	}

  	processLogin(data) {
  		
      	this.service.login(data).subscribe(res => {

          	if (res.error) {
              	alert(res.errorMessage);
          	}
          	else {

              	sessionStorage.setItem("patientEmail", data.email);
              	this.router.navigate(['/profile']);
          	}
      	})
  	}
}
