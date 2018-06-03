import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'integer'
})
export class IntegerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return parseInt(value, 10);
  }
}
