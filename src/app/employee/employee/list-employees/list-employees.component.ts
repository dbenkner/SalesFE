import { Component } from '@angular/core';
import { Employee } from '../../employee-class';
import { EmployeeService } from '../../employee.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent {
  employees!:Employee[];
  constructor (
    private empSvc: EmployeeService,
    private logInSvc: LoginService
  ){}
  ngOnInit() {
    console.log("test");
    console.log(this.logInSvc.loggedIn.email);
    this.empSvc.list().subscribe({
      next: (res) => {
        this.employees = res as Employee[];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
