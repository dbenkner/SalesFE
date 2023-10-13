import { Component } from '@angular/core';
import { Item } from 'src/app/item/item.class';
import { Order } from 'src/app/order/order.class';
import { Orderline } from '../orderline.class';
import { GlobalService } from 'src/app/global.service';
import { ItemService } from 'src/app/item/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-edit',
  templateUrl: './orderline-edit.component.html',
  styleUrls: ['./orderline-edit.component.css']
})
export class OrderlineEditComponent {
  orderline: Orderline = new Orderline();
  items: Item[] = [];
  message: string = "";
  constructor(
    private globalSvc: GlobalService,
    private itemSvc: ItemService,
    private olSvc: OrderlineService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit():void {
    this.orderline.id = +this.route.snapshot.params[`id`];
    this.message = "";
    this.olSvc.getById(this.orderline.id).subscribe({
      next: (res) => {
        console.debug(res);
        this.orderline = res;
      },
      error: (err) =>{
        console.error(err);
        this.message = "Sorry something went wrong";
      }
    });
    this.itemSvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res;
      },
      error: (err) => {
        console.error(err);
        this.message = "Sorry something went wrong";
      }
    });
  }
  save():void {
    this.olSvc.editOl(this.orderline).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigate([`/order/line/${this.orderline.orderId}`]);
      },
      error: (err) => {
        console.error(err);
        this.message = "Sorry something went wrong";
      }
    });
  }

}
