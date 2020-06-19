import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { LogComplainComponent } from './log-complain/log-complain.component'
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from "./admin-login/admin-login.component"
import { AdminComplaintsComponent } from './admin-complaints/admin-complaints.component';
import { PatientsComponent } from './patients/patients.component';
// import { ProComponent } from './pro/pro.component';
// import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminsComponent } from './admins/admins.component';
// import { LogoutAdminComponent } from './logout-admin/logout-admin.component';
// import { DeptComplaintsComponent } from './dept-complaints/dept-complaints.component';
// import { LogoutProComponent } from './logout-pro/logout-pro.component';
// import { SearchComplaintComponent } from './search-complaint/search-complaint.component';
// import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'profile', component: ProfileComponent},
	{path: 'view-profile', component: ViewProfileComponent},
	{path: 'appointments', component: AppointmentsComponent},
	{path: 'complaints', component: ComplaintsComponent},
	{path: 'book-appointment', component: BookAppointmentComponent},
	{path: 'lodge-complain', component: LogComplainComponent},
	{path: 'logout', component: LogoutComponent},
	{path: 'admin', component: AdminComponent},
	{path: 'admins', component: AdminsComponent},
	{path: 'admin-login', component: AdminLoginComponent},
	{path: 'admin-complaints', component: AdminComplaintsComponent},
	{path: 'patients', component: PatientsComponent},
	{path: 'new-admin', component: AddAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }