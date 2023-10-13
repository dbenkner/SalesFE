import { Component } from '@angular/core';
import { Item } from '../../item.class';
import { ItemService } from '../../item.service';
import { GlobalService } from 'src/app/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  item: Item = new Item();
  message: string = "";

  constructor(
    private itemSvc: ItemService,
    private globalSvc: GlobalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(){
    let id = this.route.snapshot.params[`id`];
    this.itemSvc.getItemById(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.item = res;
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
  save(): void{
    this.itemSvc.editItem(this.item).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigate([`/item`]);
      },
      error: (err) => {
        console.error(err);
        console.debug(this.item);
        this.message = "Sorry something went wrong";
      }
    });
  }
}
