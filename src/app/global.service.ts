import { Injectable } from '@angular/core';
import { Employee } from './employee/employee-class';
import { EmployeeService } from './employee/employee.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loggedInEmployee!: any;
  constructor(
    private empService: EmployeeService
  ) { }
  logOut() {
    this.loggedInEmployee = null;
  }
}
