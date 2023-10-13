import { Component } from '@angular/core';
import { Menu } from '../menu.class';
import { LoginService } from 'src/app/employee/login.service';
import { Employee } from 'src/app/employee/employee-class';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: Menu[] = [
    new Menu("HOME", "/home"), 
    new Menu("ABOUT", "/about"),
    new Menu("CUSTOMERS", "/customer/list"),
    new Menu("EMPLOYEES", "/employee/list"),
    new Menu("LOGIN", "/login"),
    new Menu("ORDER", "/order")
  ];
  loggedIn!: Employee;
  constructor(
    private globalSvc: GlobalService
  ) {}
  ngOnInit() {

  }
}
