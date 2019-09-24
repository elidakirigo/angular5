import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable , of } from 'rxjs';
// import { of } from 'rxjs';
// import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      email: 'mark@pragimtech.com',
      phoneNumber: 324563,
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1998'),
      department: 3,
      isActive: true,
      photoPath: 'assets/images/person1.jpg'
    },
    {
      id: 2,
      name: 'mary',
      gender: 'Female',
      phoneNumber: 7867899,
      contactPreference: 'phone',
      dateOfBirth: new Date('11/2/3432'),
      department: 2,
      isActive: true,
      photoPath: 'assets/images/person2.jpg'
    },
    {
      id: 3,
      name: 'john',
      gender: 'Male',
      phoneNumber: 456432,
      contactPreference: 'phone',
      dateOfBirth: new Date('3/24/1995'),
      department: 3,
      isActive: false,
      photoPath: 'assets/images/person3.jpg',
    }
  ];

  getEmployees(): Observable<Employee[]> {

    return of(this.listEmployees).delay(2000);
  }

  getEmployee(id: number): Employee {

    return this.listEmployees.find(e => e.id === id);
  }

  save(employee: Employee) {

    this.listEmployees.push(employee);
  }
}
