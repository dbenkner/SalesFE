import { Component } from '@angular/core';
import { Customer } from '../../customer.class';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {
  customer: Customer = new Customer();
  id:number = 0;
  message:string = "";
  
  constructor(
    private custSvc: CustomerService,
    private route: ActivatedRoute,
    private router: RouterLink
  ){}
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
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
  clicked(){
    this.message = "";
    this.custSvc.edit(this.customer, this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.message = "Updated Sucessful!";
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
