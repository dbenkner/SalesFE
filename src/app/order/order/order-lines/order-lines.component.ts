import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { OrderService } from '../../order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../order.class';
import { OrderlineService } from 'src/app/orderline/orderline.service';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent {
  order!: Order;
  delVal: boolean = false;
  constructor(
    private globalSvc: GlobalService,
    private orderSvc: OrderService,
    private route: ActivatedRoute,
    private olSvc: OrderlineService
  ){}
  refresh(): void {
    let id = +this.route.snapshot.params['id'];
    this.delVal = false;
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
  closeOrder():void{
    this.orderSvc.closeOrder(this.order).subscribe({
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
  delBtn():void {
    this.delVal = !this.delVal;
  }
  deleteOl(id:number):void {
    this.olSvc.deleteOl(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
