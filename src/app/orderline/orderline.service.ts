import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orderline } from './orderline.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderlineService {
  url: string = "http://localhost:5555/api/orderlines"
  constructor(
    private http: HttpClient
  ) { }
  create(orderline: Orderline): Observable<Orderline> {
    return this.http.post(`${this.url}`, orderline) as Observable<Orderline>;
  }
  getById(id: number): Observable<Orderline> {
    return this.http.get(`${this.url}/${id}`) as Observable<Orderline>;
  }
  editOl(orderline: Orderline): Observable<any> {
    return this.http.put(`${this.url}/${orderline.id}`, orderline) as Observable<any>;
  }
  deleteOl(id:number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
