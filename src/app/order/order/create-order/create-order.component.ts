import { Component } from '@angular/core';
import { Order } from '../../order.class';
import { OrderService } from '../../order.service';
import { GlobalService } from 'src/app/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer/customer.class';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  order: Order = new Order();
  custs?: Customer[]
  message: string = "";
  constructor(
    private orderSvc: OrderService,
    private globalSvc: GlobalService,
    private router: Router,
    private route: ActivatedRoute,
    private custSvc: CustomerService
  ) {}
  ngOnInit() {
    this.custSvc.list().subscribe({
      next:(res) => {
        this.custs = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  save() {
    this.order.customerId = +this.order.customerId;
    console.log(this.order);
    this.orderSvc.newOrder(this.order).subscribe({
      next:(res) => {
        console.log(res);
        this.message = `Order ${res.id} for customer: ${res.customer.name} has been created!`;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
