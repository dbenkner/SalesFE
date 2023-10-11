import { Component } from '@angular/core';
import { Employee } from '../../employee-class';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {
  employee: Employee = new Employee();
  message: string ="";
  constructor(
    private empSvc: EmployeeService,
    private route: ActivatedRoute,
    private routerLink: RouterLink,
    private router: Router
  ) {}
  ngOnInit(

  ) {}

  saveEmployee(){
    this.empSvc.create(this.employee).subscribe({
      next: (res) => {
        this.message = "Created New Employee!";
        this.router.navigate([`/employee/${res.id}`]);
      },
      error: (err) => {
        console.error(err);
        this.message = "Creation Failed!";
      }
    });
  }
}
