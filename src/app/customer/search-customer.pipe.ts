import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer.class';

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {

  transform(customers: Customer[], substr: string = ""): Customer[] {
    if(substr ==="") {
      return customers;
    }
    let selectedCustomers: Customer[] = [];
    for (let c of customers) {
      if(
        c.code.toLowerCase().includes(substr.toLowerCase()) ||
        (c.name !== null && c.name.toLowerCase().includes(substr.toLowerCase()))
      ) {
        selectedCustomers.push(c);
      }
    }
    return selectedCustomers;
  }
}
