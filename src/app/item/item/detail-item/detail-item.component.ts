import { Component } from '@angular/core';
import { Item } from '../../item.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemComponent } from '../item.component';
import { GlobalService } from 'src/app/global.service';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent {
  item!: Item;
  message: string = "";

  constructor(
    private route: ActivatedRoute,
    private itemSvc: ItemService,
    private globalSvc: GlobalService,
    private router: Router
  ) {}
  ngOnInit():void {
    let id = this.route.snapshot.params[`id`];
    this.itemSvc.getItemById(id).subscribe({
      next:(res) => {
        console.debug(res);
        this.item = res;
      },
      error:(err) => {
        console.error(err);
        this.message= "Sorry something went wrong";
      }
    });
  }
  del():void{
    this.itemSvc.deleteItem(this.item.id).subscribe({
      next: (res) => {
        this.router.navigate(['/item']);
      },
      error: (err) => {
        console.error(err);
        this.message = "Sorry something went wrong";
      },
    });
  }
}
