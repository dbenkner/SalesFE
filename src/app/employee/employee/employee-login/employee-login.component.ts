import { Component } from '@angular/core';
import { Employee } from '../../employee-class';
import { LoginService } from '../../login.service';
import { EmployeeService } from '../../employee.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  employee: Employee = new Employee();
  constructor(
    private empSvc: EmployeeService,
    private globalSvc: GlobalService
  ){}
  logIn(){
    this.empSvc.employeeLogIn(this.employee.email, this.employee.password).subscribe({
      next: (res) => {
        console.log(res);
        this.globalSvc.loggedInEmployee = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
