import { Component } from '@angular/core';
import { Order } from '../../order.class';
import { Customer } from 'src/app/customer/customer.class';
import { OrderService } from '../../order.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { GlobalService } from 'src/app/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent {
  order: Order = new Order();
  customers! : Customer[];
  id:number = 0;
  constructor(
    private orderSvc: OrderService,
    private custSvc: CustomerService,
    private globalSvc: GlobalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(){
    this.route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
      }
    });
    this.orderSvc.listById(this.id).subscribe({
      next: (res) => {
        this.order = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.custSvc.list().subscribe({
      next: (res) => {
        this.customers = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  save() {
    this.order.customerId = +this.order.customerId;
    console.log(this.order);
    this.orderSvc.edit(this.order, this.id).subscribe({
      next: (res) => {
        console.log(res); 
        this.router.navigate([`/order`]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
