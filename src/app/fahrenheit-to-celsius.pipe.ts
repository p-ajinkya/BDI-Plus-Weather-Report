import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheitToCelsius'
})
export class FahrenheitToCelsiusPipe implements PipeTransform {

  transform(value: number): number {
    if (isNaN(value)) {
      return value; // Return null if the input is not a valid number
    }

    // Conversion formula from Fahrenheit to Celsius: (F - 32) * 5/9
    const celsius = (value - 273.15);
    return Math.round(celsius); // Round to two decimal places
  }

}
