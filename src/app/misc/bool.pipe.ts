import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  transform(bool: boolean, local:string): string { 
    if(local === "fr") return bool ? "YES" : "NO";
    return bool? "YES" : "NO";
  }

}
