import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.class';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = "http://localhost:5555/api/items";
  constructor(
    private http: HttpClient
  ) { }
  list(): Observable<Item[]> {
    return this.http.get(this.url) as Observable<Item[]>;
  }
  newItem(item:Item): Observable<Item>{
    return this.http.post(this.url, item) as Observable<Item>;
  }
}
