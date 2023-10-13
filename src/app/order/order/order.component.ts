import { Component } from '@angular/core';
import { Order } from '../order.class';
import { GlobalService } from 'src/app/global.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders!: Order[];
  constructor (
    private globalSvc: GlobalService,
    private custSvc: CustomerService,
    private orderSvc: OrderService
  ) {}
  ngOnInit(){
    this.orderSvc.list().subscribe({
      
    });
  }
}
