import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  email = 'none';

  

  employees: Employee[] = [
    {id: 1,
      name: 'Mark',
      gender: 'Male',
      email: 'mark@pragimtech.com',
      phoneNumber: 324563,
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1998'),
      department: 'IT',
      isActive: true,
      photopath: 'assets/images/person1.jpg'
    },
    { id: 2,
    name: 'mary',
    gender: 'Female',
    phoneNumber : 7867899,
    contactPreference: 'phone' ,
    dateOfBirth: new Date('11/2/3432'),
    department: 'hr',
    isActive: true,
    photopath: 'assets/images/person2.jpg'
  },
  {
    id: 3,
    name: 'john',
    gender: 'Male',
    phoneNumber: 456432,
    contactPreference: 'phone',
    dateOfBirth: new Date('3/24/1995'),
    department: 'IT',
    isActive: false,
    photopath: 'assets/images/person3.jpg',
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
