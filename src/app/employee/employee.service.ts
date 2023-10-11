import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = "http://localhost:5555/api/employees"
  constructor(
    private http: HttpClient
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
}
