import { Component } from '@angular/core';
import { Item } from '../../item.class';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  message:string = "";
  items!: Item[];
  constructor (
    
  ){}
}
