import { Component } from '@angular/core';
import { Customer } from '../../customer.class';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute, Route, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})

export class DetailCustomerComponent {
  customer :Customer = new Customer();
  id = 0;
  constructor (
    private custSvc: CustomerService,
    private route: ActivatedRoute,
    private router: RouterLink
  ){}
  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.custSvc.detail(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.customer = res as Customer;
      },
      error: (err) => {
        console.log(err);
      }
    });
    
  }
}
