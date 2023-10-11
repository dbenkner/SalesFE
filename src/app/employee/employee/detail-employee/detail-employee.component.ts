import { Component } from '@angular/core';
import { Employee } from '../../employee-class';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent {
  employee: Employee = new Employee();
  id: number = 0;
  constructor (
    private empSvc:EmployeeService,
    private route: ActivatedRoute,
    private routerLink: RouterLink,
    private router: Router
  ) {}

  ngOnInit(){
    this.route.params.subscribe({
      next:(paramas) => {
        console.log(paramas['id']);
        this.id = paramas[`id`]
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
  deleteButton(){
    this.empSvc.delete(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/employee/list']);
      },
      error (err) {
        console.error(err);
      }
    });
  }
}
