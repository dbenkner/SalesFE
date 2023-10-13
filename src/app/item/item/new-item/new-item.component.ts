import { Component } from '@angular/core';
import { Item } from '../../item.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../item.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {
  item: Item = new Item();
  message: String = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemSvc: ItemService,
    private globalSvc: GlobalService    
  ) {}
  ngOninit():void{

  }
  save(){
    if (this.item.price < 0) {
      this.message = "The price cannot be NEGATIVE!";
      return;
    }
    this.itemSvc.newItem(this.item).subscribe({
      next:(res) => {
        this.message = `Add item ${this.item.name} success!`;
        console.log(res);
        this.router.navigate(['/item']);
      },
      error:(err) => {
        this.message = `Sorry something went wrong`;
      }
    });
  }
}
