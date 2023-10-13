import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { OrderService } from '../../order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../order.class';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent {
  order!: Order;
  constructor(
    private globalSvc: GlobalService,
    private orderSvc: OrderService,
    private route: ActivatedRoute
  ){}
  refresh(): void {
    let id = +this.route.snapshot.params['id'];
    this.orderSvc.listById(id).subscribe({
      next: (res) => {
        this.order = res;
        console.debug(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  backOrder():void {
    this.orderSvc.backOrder(this.order, this.order.id).subscribe({
      next: (res) => {
        console.debug("Placed on Backorder!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  okOrder():void {
    this.orderSvc.okOrder(this.order).subscribe({
      next: (res) => {
        console.debug("Order is OK");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit():void {
    this.refresh();
  }
}
