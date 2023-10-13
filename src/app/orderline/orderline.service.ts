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
}
