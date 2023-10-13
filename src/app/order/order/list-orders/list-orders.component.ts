import { Component } from '@angular/core';
import { Order } from '../../order.class';
import { OrderService } from '../../order.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent {
  orders!: Order[]
  substr: string = "";
  constructor (
    private orderSvc: OrderService,
    private custSvc: CustomerService,
    private globalSvc: GlobalService,
  ){}
  ngOnInit() {
    this.orderSvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.orders = res;
      },
      error (err) {
        console.error(err);
      }
    });
  }
}
