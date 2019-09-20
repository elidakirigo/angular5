import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
    {id: 1,
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
    { id: 2,
      name: 'mary',
      gender: 'Female',
      phoneNumber : 7867899,
      contactPreference: 'phone' ,
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

    getEmployees(): Employee[] {

        return this.listEmployees;
    }

    save(employee: Employee) {

        this.listEmployees.push(employee);
    }
}
