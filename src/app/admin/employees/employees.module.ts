import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { EmployeesComponent } from "./employees.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


//components
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { EmployeesCrudComponent } from './employees-crud/employees-crud.component';


@NgModule({
  declarations: [EmployeesComponent, EmployeesDetailsComponent, EmployeesCrudComponent],
  exports: [EmployeesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ]
})
export class EmployeesModule { }