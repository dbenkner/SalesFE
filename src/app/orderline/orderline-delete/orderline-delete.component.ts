import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OrderlineService } from '../orderline.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-orderline-delete',
  templateUrl: './orderline-delete.component.html',
  styleUrls: ['./orderline-delete.component.css']
})
export class OrderlineDeleteComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private olSvc: OrderlineService,
    private globalSvc: GlobalService
  ) {}
  ngOnInit():void {}
}
