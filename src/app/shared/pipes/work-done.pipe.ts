import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workDone',
  standalone: true
})
export class WorkDonePipe implements PipeTransform {

  transform(value: boolean): string | null {
    switch (value) {
      case true:
        return '✔️'; // Check mark for done
      case false:
        return '❌'; // Cross mark for clear
      default:
        return null;
    }
  }

}
