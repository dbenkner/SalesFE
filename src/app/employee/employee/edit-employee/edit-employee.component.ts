import { Component } from '@angular/core';
import { Employee } from '../../employee-class';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employee: Employee = new Employee();
  message: string = "";
  id: number = 0;
  constructor(
    private empSvc: EmployeeService,
    private route: ActivatedRoute,
    private routerLink: RouterLink,
    private router: Router,
    private globalSvc: GlobalService
  ){}
  ngOnInit() {
    this.globalSvc.checkForLoggedIn();
    this.employee = this.globalSvc.loggedInEmployee;
    this.route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
      }
    });
    this.empSvc.detail(this.id).subscribe({
      next: (res) => {
        this.employee = res as Employee;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  saveEmployee(){
    this.empSvc.edit(this.id,this.employee).subscribe({
      next: (res) => {
        this.message = "Update Success!";
      },
      error: (err) => {
        console.error(err);
        this.message = "Update Failed!";
      }
    });
  }
}
