import { Item } from "../item/item.class";

export class Orderline {
    id: number = 0;
    quantity: number = 1;
    
    orderId: number = 0;
    
    itemId: number = 0;
    item: Item | null = null;
}