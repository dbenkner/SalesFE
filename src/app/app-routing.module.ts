import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ListCustomersComponent } from './customer/customer/list-customers/list-customers.component';
import { NewCustomerComponent } from './customer/customer/new-customer/new-customer.component';
import { DetailCustomerComponent } from './customer/customer/detail-customer/detail-customer.component';
import { EditCustomerComponent } from './customer/customer/edit-customer/edit-customer.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { ListEmployeesComponent } from './employee/employee/list-employees/list-employees.component';
import { DetailEmployeeComponent } from './employee/employee/detail-employee/detail-employee.component';
import { NewEmployeeComponent } from './employee/employee/new-employee/new-employee.component';
import { EditEmployeeComponent } from './employee/employee/edit-employee/edit-employee.component';
import { EmployeeLoginComponent } from './employee/employee/employee-login/employee-login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'customer', component:CustomerComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'employee/list', component:ListEmployeesComponent},
  {path: 'employee/new', component:NewEmployeeComponent},
  {path: 'employee/:id', component:DetailEmployeeComponent},
  {path: 'customer/list', component:ListCustomersComponent},
  {path: 'customer/new', component:NewCustomerComponent},
  {path: 'customer/:id', component:DetailCustomerComponent},
  {path: 'customer/edit/:id', component:EditCustomerComponent},
  {path: 'employee/edit/:id', component:EditEmployeeComponent},
  {path: 'login', component:EmployeeLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouterLink]
})
export class AppRoutingModule { }
