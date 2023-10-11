import { Component } from '@angular/core';
import { Customer } from '../../customer.class';
import { CustomerService } from '../../customer.service';
import { LoginService } from 'src/app/employee/login.service';
import { Employee } from 'src/app/employee/employee-class';

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
  sortCol: string = "name"; // var for column name
  sortAsc: boolean = true; // sets sort to asc by default
  employee!: Employee;
  sortOrder(col:string): void {
    if(col == this.sortCol) {
      this.sortAsc = !this.sortAsc; //flips the bool
      return;
    }
    this.sortCol = col;
    this.sortAsc = true;
  }
  constructor(
    private custSvc: CustomerService,
    private logInSvc: LoginService
  ) {}
  ngOnInit() {
    this.message = "";
    this.employee = this.logInSvc.loggedIn;
    this.custSvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.customers = res as Customer[];
      }
    })
  }

}
