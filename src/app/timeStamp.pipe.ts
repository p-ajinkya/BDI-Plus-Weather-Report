import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToTime'
})
export class TimestampToTimePipe implements PipeTransform {
  transform(timestamp: number, optionalArg?: any): any {
    const date = new Date(timestamp * 1000);
    if(optionalArg){
      return date;
    }
    return date.toLocaleTimeString();
  }
}
