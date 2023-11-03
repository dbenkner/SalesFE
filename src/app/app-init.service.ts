import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  config : any;
  constructor(
    private http: HttpClient
  ) { }
  getsettings(): void {
    this.http.get(" ./assets/config.json").subscribe(
      (config) => {
        this.config = config;
        console.log(this.config);
      }
    );
  }
}
