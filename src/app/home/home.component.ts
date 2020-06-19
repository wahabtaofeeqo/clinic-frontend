import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClinicService } from '../clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  	complainForm
  	email;
    online;

   	constructor(private builder: FormBuilder, private service: ClinicService, private router: Router) { 
      	this.complainForm = this.builder.group({
        	subject: '',
        	message: ''
      	});
    }

    ngOnInit() {
    	if (sessionStorage.getItem("patientEmail") != null) {
        this.online = true;
      }
    }

    processForm(data):void {

      if (sessionStorage.getItem("patientEmail") != null) {
          
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

}