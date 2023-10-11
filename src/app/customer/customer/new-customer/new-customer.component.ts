import { Component } from '@angular/core';
import { Customer } from '../../customer.class';
import { CustomerService } from '../../customer.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {
  customer: Customer = new Customer();

  constructor (
    private custSvc: CustomerService,
    private formBuilder: FormBuilder,
  ) {}
  
  clicked():void {
    console.log(this.customer);
    this.custSvc.create(this.customer).subscribe(
      {
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.error(err);
        }
      }
    );
  }
}
