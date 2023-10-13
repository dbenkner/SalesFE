import { Component } from '@angular/core';
import { Employee } from '../employee/employee-class';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  emp: Employee = new Employee();

  constructor(
    private globalSvc:GlobalService,
    private router: Router
  ){}
  ngOnInit(){
    this.emp = this.globalSvc.loggedInEmployee;
    if (this.emp === undefined) { this.router.navigate(['/login'])}
  }
}
