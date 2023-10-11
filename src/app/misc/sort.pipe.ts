import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], column:string = "id", asc: boolean = true): any[] {
    const compareFn = (a:any, b:any): number => {
      if(typeof arr === "undefined" ||typeof arr === null) return 0;
      let x:any = typeof a[column] === "number" ? a[column] : a[column].toString().toLowerCase();
      let y:any = typeof b[column] === "number" ? b[column] : b[column].toString().toLowerCase();
      if(x === y) return 0;
      if(asc ) {
        return (x > y) ? 1: -1;
      } else {
        return (x > y) ? -1: 1;
      }
    }
    return arr.sort(compareFn);
  }

}
