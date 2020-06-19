import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClinicService } from '../clinic.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.sass']
})
export class AddAdminComponent implements OnInit {

  	adminForm;
	schools;
	departments;

  	constructor(private builder: FormBuilder, private service: ClinicService) { 
  		this.adminForm = this.builder.group({
  			fname: '',
        lname: '',
  			password: '',
  			email: '',
  			phone: ''
  		})
  	}

  	ngOnInit() {}

    addAdmin(data) {

    	if (data.name != "" && data.email != "" && data.phone != "" && data.password != "") {
    		this.service.admin(data).subscribe(res => {
	            if (res.error) {
	                alert(res.errorMessage);
	            }
	            else {

	                this.adminForm.reset();
	                alert(res.message);
	            }
	        })
    	}
    }

}
