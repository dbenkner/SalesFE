import { Customer } from "../customer/customer.class";
import { Orderline } from "../orderline/orderline.class";

export class Order {
    id: number = 0;
    date: string = "";
    description: string = "";
    status: string = "NEW";
    total: number = 0;
    customerId: number = 0;
    customer: Customer | any = null;
    orderlines: Orderline[] | null = null;
}