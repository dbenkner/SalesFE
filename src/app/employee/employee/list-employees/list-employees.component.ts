import { Component } from '@angular/core';
import { Employee } from '../../employee-class';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent {
  employees!:Employee[];
  constructor (
    private empSvc: EmployeeService
  ){}
  ngOnInit() {
    console.log("test");
    this.empSvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.employees = res as Employee[];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
