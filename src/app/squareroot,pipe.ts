import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareRoot'
})
export class SquareRootPipe implements PipeTransform {
  transform(value: number): number {
    if (value < 0) {
      throw new Error('Cannot calculate the square root of a negative number.');
    }
    return Math.sqrt(value);
  }
}
