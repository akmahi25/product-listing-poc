import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr'
})
export class UsdToInrPipe implements PipeTransform {
  transform(value: number): string {
    const conversionRate = 75; // 75 as example rate
    return `₹ ${(value * conversionRate).toFixed(2)}`;
  }
}
