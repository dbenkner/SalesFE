import { Component } from '@angular/core';
import { Order } from '../../order.class';
import { Employee } from 'src/app/employee/employee-class';
import { OrderService } from '../../order.service';
import { GlobalService } from 'src/app/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent {
  order!: Order;
  emp: Employee = new Employee();
  message:string = "";
  id: number = 0;
  constructor(
    private orderSvc : OrderService,
    private globalSvc: GlobalService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit() {
    this.route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.orderSvc.listById(this.id).subscribe({
      next: (res) => {
        this.order = res;
      },
      error: (err) => {
        if (err.status === 404) {
          this.message ="No Orders Found";
          console.error(err);
        }
        console.error(err);
      }
    });
  }

  deleteOrder(){
    this.orderSvc.deleteOrder(this.id).subscribe({
      next: (res) => {
        this.router.navigate(['/order']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
