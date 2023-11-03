import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu/menu.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { ListCustomersComponent } from './customer/customer/list-customers/list-customers.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item/item.component';
import { ItemsListComponent } from './item/item/items-list/items-list.component';
import { NewCustomerComponent } from './customer/customer/new-customer/new-customer.component';
import { DetailCustomerComponent } from './customer/customer/detail-customer/detail-customer.component';
import { Router } from '@angular/router';
import { BoolPipe } from './misc/bool.pipe';
import { SearchCustomerPipe } from './customer/search-customer.pipe';
import { EditCustomerComponent } from './customer/customer/edit-customer/edit-customer.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { ListEmployeesComponent } from './employee/employee/list-employees/list-employees.component';
import { DetailEmployeeComponent } from './employee/employee/detail-employee/detail-employee.component';
import { NewEmployeeComponent } from './employee/employee/new-employee/new-employee.component';
import { EditEmployeeComponent } from './employee/employee/edit-employee/edit-employee.component';
import { SortPipe } from './misc/sort.pipe';
import { EmployeeLoginComponent } from './employee/employee/employee-login/employee-login.component';
import { LoginService } from './employee/login.service';
import { OrderComponent } from './order/order/order.component';
import { CreateOrderComponent } from './order/order/create-order/create-order.component';
import { ListOrdersComponent } from './order/order/list-orders/list-orders.component';
import { EditOrderComponent } from './order/order/edit-order/edit-order.component';
import { DetailOrderComponent } from './order/order/detail-order/detail-order.component';
import { SearchOrderPipe } from './order/search-order.pipe';
import { OrderLinesComponent } from './order/order/order-lines/order-lines.component';
import { OrderlineCreateComponent } from './orderline/orderline-create/orderline-create.component';
import { NewItemComponent } from './item/item/new-item/new-item.component';
import { OrderlineEditComponent } from './orderline/orderline-edit/orderline-edit.component';
import { OrderlineDeleteComponent } from './orderline/orderline-delete/orderline-delete.component';
import { EditItemComponent } from './item/item/edit-item/edit-item.component';
import { DetailItemComponent } from './item/item/detail-item/detail-item.component';
import { AppInitService } from './app-init.service';

export const startupServiceFactory = (appInit: AppInitService) => {
  return () => appInit.getsettings();
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerComponent,
    ListCustomersComponent,
    HomeComponent,
    ItemComponent,
    ItemsListComponent,
    NewCustomerComponent,
    DetailCustomerComponent,
    BoolPipe,
    SearchCustomerPipe,
    EditCustomerComponent,
    EmployeeComponent,
    ListEmployeesComponent,
    DetailEmployeeComponent,
    NewEmployeeComponent,
    EditEmployeeComponent,
    SortPipe,
    EmployeeLoginComponent,
    OrderComponent,
    CreateOrderComponent,
    ListOrdersComponent,
    EditOrderComponent,
    DetailOrderComponent,
    SearchOrderPipe,
    OrderLinesComponent,
    OrderlineCreateComponent,
    NewItemComponent,
    OrderlineEditComponent,
    OrderlineDeleteComponent,
    EditItemComponent,
    DetailItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppInitService, {
      provide : APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
