import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { StuSidebarComponent } from './stu-sidebar/stu-sidebar.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { LogoutComponent } from './logout/logout.component';
import { LogComplainComponent } from './log-complain/log-complain.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminComplaintsComponent } from './admin-complaints/admin-complaints.component';
import { PatientsComponent } from './patients/patients.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent,
    StuSidebarComponent,
    ViewProfileComponent,
    AppointmentsComponent,
    ComplaintsComponent,
    LogoutComponent,
    LogComplainComponent,
    BookAppointmentComponent,
    AdminComponent,
    AdminLoginComponent,
    SidebarComponent,
    AddAdminComponent,
    AdminsComponent,
    AdminComplaintsComponent,
    PatientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
