import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderline } from '../orderline.class';
import { Item } from 'src/app/item/item.class';
import { OrderService } from 'src/app/order/order.service';
import { ItemService } from 'src/app/item/item.service';
import { GlobalService } from 'src/app/global.service';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-create',
  templateUrl: './orderline-create.component.html',
  styleUrls: ['./orderline-create.component.css']
})
export class OrderlineCreateComponent {
  orderline: Orderline = new Orderline();
  items: Item[] = [];
  message: string ="";

  constructor(
    private rotue: ActivatedRoute,
    private router: Router,
    private orderSvc: OrderService,
    private itemSvc: ItemService,
    private globalSvc: GlobalService,
    private olSvc: OrderlineService
  ) {}
  ngOnInit() :void {
    /**
     * Needed to read the path variable to pull the foreign key for the order ID!
     */
    this.orderline.orderId = +this.rotue.snapshot.params["oid"];
    this.message = "";
    this.itemSvc.list().subscribe({
      next: (res) => {
        this.items = res;
        console.debug(res);
      },
      error: (err) => {
        console.error(err);
        this.message = "Sorry something went wrong";
      }
    });
  }
  save ():void {
    this.olSvc.create(this.orderline).subscribe({
      next:(res) => {
        console.log(res);
        this.message = `Added lineitem`;
        this.router.navigate([`/order/line/${this.orderline.orderId}`]);
      },
      error: (err) => {
        console.error(err);
        this.message = "Sorry something went wrong";
      }
    });
  }
}
