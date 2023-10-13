import { Component } from '@angular/core';
import { Item } from '../../item.class';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  message:string = "";
  items!: Item[];
  constructor (
    private itemSvc: ItemService
  ){}
  ngOnInit(){
    this.itemSvc.list().subscribe({
      next: (res) => {
        this.items = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
