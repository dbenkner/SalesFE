import { Component } from '@angular/core';
import { Customer } from '../../customer.class';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent {
  message:string = "";
  customers!: Customer[];
  locale: string = "fr";
  substr: string = "";
  constructor(
    private custSvc: CustomerService
  ) {}
  ngOnInit() {
    this.message = "";

    this.custSvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.customers = res as Customer[];
      }
    })
  }
}
