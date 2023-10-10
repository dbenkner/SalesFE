import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ListCustomersComponent } from './customer/customer/list-customers/list-customers.component';
import { NewCustomerComponent } from './customer/customer/new-customer/new-customer.component';
import { DetailCustomerComponent } from './customer/customer/detail-customer/detail-customer.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'customer', component:CustomerComponent},
  {path: 'customer/list', component:ListCustomersComponent},
  {path: 'customer/new', component:NewCustomerComponent},
  {path: 'customer/:id', component:DetailCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouterLink]
})
export class AppRoutingModule { }
