import { Component } from '@angular/core';
import { Customer } from '../../customer.class';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute, Route, Router, RouterLink, RouterModule } from '@angular/router';
import { Employee } from 'src/app/employee/employee-class';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})

export class DetailCustomerComponent {
  customer :Customer = new Customer();
  id = 0;
  employee!: Employee;
  constructor (
    private custSvc: CustomerService,
    private route: ActivatedRoute,
    private routerLink: RouterLink,
    private router: Router,
    private globalSvc: GlobalService
  ){}
  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.employee = this.globalSvc.loggedInEmployee;
    if (this.employee === undefined) {this.router.navigate([`home`])}
    this.custSvc.detail(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.customer = res as Customer;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  deleteButton(){
    this.custSvc.delete(this.id).subscribe({
      next: (res) => {
        console.log(res);
        
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
