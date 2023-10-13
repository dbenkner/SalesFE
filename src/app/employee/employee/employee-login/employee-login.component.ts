import { Component } from '@angular/core';
import { Employee } from '../../employee-class';
import { LoginService } from '../../login.service';
import { EmployeeService } from '../../employee.service';
import { GlobalService } from 'src/app/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  employee: Employee = new Employee();
  message: string ="";
  constructor(
    private empSvc: EmployeeService,
    private globalSvc: GlobalService,
    private router: Router
  ){}
  logIn(){
    this.globalSvc.loggedInEmployee = null;
    this.empSvc.employeeLogIn(this.employee.email, this.employee.password).subscribe({
      next: (res) => {
        this.globalSvc.loggedInEmployee = res;

        this.router.navigate(['/home']);
      },
      error: (err) => {
        if (err.status === 404) {
          this.message = "Not Found! Log on failed!";  
        }
        console.error(err);
      }
    });
  }
}
