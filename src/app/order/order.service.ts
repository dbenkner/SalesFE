import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.class';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string = "http://localhost:5555/api/orders";
  constructor(
    private http: HttpClient
  ) { }
  list(): Observable<Order[]> {
    return this.http.get(this.url) as Observable<Order[]>;
  }
  listById(id:number): Observable<Order> {
    return this.http.get(`${this.url}/${id}`) as Observable<Order>;
  }
  newOrder(order: Order): Observable<Order> {
    return this.http.post(this.url, order) as Observable<Order>
  }
  edit(ord: Order, id:number): Observable<any>{
    return this.http.put(`${this.url}/${id}`, ord) as Observable<any>;
  }
  backOrder(ord: Order, id:number): Observable<any>{
    return this.http.put(`${this.url}/back/${id}`, ord) as Observable<any>;
  }
  okOrder(order: Order): Observable<any>{
    return this.http.put(`${this.url}/ok/${order.id}`, order) as Observable<any>;
  }
  closeOrder(order: Order): Observable<any>{
    return this.http.put(`${this.url}/close/${order.id}`, order) as Observable<any>;
  }
  deleteOrder(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
