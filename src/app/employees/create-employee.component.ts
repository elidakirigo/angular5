import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() {
    this.datePickeConfig = Object.assign({} , {
      containerClass: 'theme-dark-blue' ,
      showWeekNumbers: false,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2019, 11, 31),
      dateInputFormat: 'DD/MM/YYYY' });
  }

  gender = 'Male';

  isActive = true;

  department = 3;

  datePickeConfig: Partial<BsDatepickerConfig>;

  dateOfBirth: Date =  new Date(2018, 0, 30);

  previewPhoto = false;

  EmailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photopath: null
  };

  departments: Department[] = [
    { id : 1, name : 'help desk'},
    { id : 2, name : 'HR'},
    { id : 3, name : 'IT'},
    { id : 4, name : 'payroll'}

  ];

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void {

    console.log(newEmployee);

  }
}
