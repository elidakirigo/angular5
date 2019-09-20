import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  email = 'none';

  employees: Employee[];

  filteredEmployees: Employee[];

  // tslint:disable-next-line: variable-name
  private _searchTerm: string;

  get searchTerm(): string {

    return this._searchTerm;
  }

  set searchTerm(value: string) {

    this._searchTerm = value;

    this.filteredEmployees = this.filterEmployees(value);
  }

  // dataFromChild: Employee;

  // employeeToDisplay: Employee;

  // private arrayIndex = 1;

  // tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeService, private _route: ActivatedRoute, private _router: Router) { }

  // nextEmployee(): void {

  //   if (this.arrayIndex <= 2) {

  //     this.employeeToDisplay = this.employees[this.arrayIndex];

  //     this.arrayIndex++;

  //   } else {

  //     this.employeeToDisplay = this.employees[0];

  //     this.arrayIndex = 1;
  //   }
  // }

  ngOnInit() {

    this.employees = this._employeeService.getEmployees();

    this.filteredEmployees = this.employees;

    if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('serachTerm');
    } else {
      this.filteredEmployees = this.employees;
    }

    // this.employeeToDisplay = this.employees[0];
  }

  onClick(employeeId: number) {

    this._router.navigate(['/employees', employeeId], {
      // tslint:disable-next-line: object-literal-key-quotes
      queryParams: { 'searchTerm': this.searchTerm, 'testParam': 'testValue' }
    });
  }

  changeEmployeeName() {
    // this.employees[0].name = 'jordan';
    // this.filteredEmployees = this.filterEmployees(this.searchTerm);

    const newEmployeeArray: Employee[] = Object.assign([], this.employees);

    newEmployeeArray[0].name = 'jordan';

    this.employees = newEmployeeArray;

  }

  filterEmployees(searchString: string) {

    return this.employees.filter(employee => employee.name.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);

  }

  //   handleNotify(eventData: Employee) {

  //     this.dataFromChild = eventData;
  //   }
}
