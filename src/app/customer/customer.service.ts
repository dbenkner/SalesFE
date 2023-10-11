import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.class';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url: string = "http://localhost:5555/api/customers";
  constructor(
    private http: HttpClient
  ) { }
  list(): Observable<Customer[]> {
    return this.http.get(this.url) as Observable<Customer[]>;
  }
  detail(id:number): Observable<Customer> {
    return this.http.get(`${this.url}/${id}`) as Observable<Customer>;
  }
  create(cust:Customer): Observable<Customer> {
    return this.http.post(`${this.url}`, cust) as Observable<Customer>;
  } 
  edit(cust:Customer, id:number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, cust) as  Observable<any>;
  }
  delete(id:number): Observable<any> {
  return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
