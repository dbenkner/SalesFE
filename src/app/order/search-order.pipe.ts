import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order.class';

@Pipe({
  name: 'searchOrder'
})
export class SearchOrderPipe implements PipeTransform {

  transform(orders: Order[], substr:string): Order[] {
    if(substr==="") return orders;

    let selectedOrders = []
    for(let order of orders) {
      if (order.description.toLocaleLowerCase().includes(substr.toLowerCase()) || order.customer.name.toLocaleLowerCase().includes(substr.toLocaleLowerCase()) ||
      order.status.toLocaleLowerCase().includes(substr.toLocaleLowerCase()))
      {
        selectedOrders.push(order);
      }
    }
    return selectedOrders;
  }

}
