import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
