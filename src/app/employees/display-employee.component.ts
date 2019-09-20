import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {

  // @Input() employeeId: number;

  @Input() employee: Employee;

  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  // tslint:disable-next-line: variable-name
  private _employee: Employee;

  private selectedEmployeeId: number;

  // @Input()

  // set employee(val: Employee) {
  //   this._employee = val;
  // }

  // get employee(): Employee {
  //   return this._employee;
  // }

  // tslint:disable-next-line: variable-name
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);

    //   const previousEmployee = changes.employee.previousValue as Employee;
    //   const currentEmployee = changes.employee.currentValue as Employee;

    //   console.log(previousEmployee ? previousEmployee.name : 'null' );

    for (const propName of Object.keys(changes)) {
      console.log(propName);
      const change = changes[propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);
      console.log(propName + ' from : ' + from + ' to : ' + to);


    }
  }

  handleClick() {
    this.notify.emit(this.employee);
  }
}
