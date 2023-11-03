import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee-class';
import { Observable } from 'rxjs';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  get url() { return `${this.init.config.baseurl}/api/employees`}
  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { }
  list(): Observable<Employee[]> {
    return this.http.get(this.url) as Observable<Employee[]>;
  }
  detail(id:number): Observable<Employee> {
    return this.http.get(`${this.url}/${id}`) as Observable<Employee>;
  }
  create(employee:Employee): Observable<Employee> {
    return this.http.post(this.url, employee) as Observable<Employee>;
  }
  edit(id:number, employee:Employee): Observable<any> {
    return this.http.put(`${this.url}/${id}`, employee) as Observable<any>;
  }
  delete(id:number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  employeeLogIn(email:string, pw:string): Observable<Employee>{
    return this.http.get(`${this.url}/${email}/${pw}`) as Observable<Employee>;
  }
}
