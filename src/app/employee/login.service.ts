import { Injectable } from '@angular/core';
import { Employee } from './employee-class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn: Employee = new Employee();
  url:string = "http://localhost:5555/api/employees"
  constructor(
    private http: HttpClient
  ) { }
  logIn(email:string, pw:string): Observable<Employee>{
    return this.http.get(`${this.url}/${email}/${pw}`) as Observable<Employee>;
  }
  setLoggedIn(emp:Employee): void {
    this.loggedIn = emp;
  }
  
}
