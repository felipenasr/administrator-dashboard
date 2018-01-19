import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeesModule } from './employees/employees.module';
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuditComponent } from './audit/audit.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
  


@NgModule({
  declarations: [AdminComponent, DashboardComponent, AuditComponent],
  exports: [AdminComponent],
  imports: [
    CommonModule,
    BrowserModule,
    EmployeesModule,
    RouterModule
  ]
})
export class AdminModule { }