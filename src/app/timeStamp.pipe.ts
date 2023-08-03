import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToTime'
})
export class TimestampToTimePipe implements PipeTransform {
  transform(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  }
}
