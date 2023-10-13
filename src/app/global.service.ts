import { Injectable } from '@angular/core';
import { Employee } from './employee/employee-class';
import { EmployeeService } from './employee/employee.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loggedInEmployee!: any;
  constructor(
    private empService: EmployeeService,
    private router: Router
  ) { }
  logOut() {
    this.loggedInEmployee = null;
  }
  checkForLoggedIn(){
    if (this.loggedInEmployee === undefined) {
      this.router.navigate([`/login`]);
    }
  }
}
