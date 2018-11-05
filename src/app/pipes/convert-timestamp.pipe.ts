import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTimestamp'
})
export class ConvertTimestampPipe implements PipeTransform {

  transform(timestamp: number, includeHours: boolean = true): any {
    let convertedTimestamp = ''; // timestamp converted to format: [HH:]MM:SS
    const [hrs, mins, secs] = this.calculateTimestamp(timestamp);
    if (includeHours) {
      convertedTimestamp += this.prefixZero(hrs) + ':';
    }
    convertedTimestamp += this.prefixZero(mins) + ':' + this.prefixZero(secs);
    return convertedTimestamp;
  }

  // helper method: adds "0" prefix before numbers < 10
  prefixZero(number) {
    let prefix = '';
    if (number < 10) {
      prefix = '0';
    }
    return prefix + number;
  }

  // helper method: calculates: hours, minutes and seconds number for given duration in seconds
  calculateTimestamp(duration) {
    let hrs = 0,
      mins = 0,
      secs = 0;
    let durationLeft = Math.floor(duration); // convert to integer

    hrs = Math.floor(durationLeft / 3600);
    durationLeft -= (hrs * 3600);

    mins = Math.floor(durationLeft / 60);
    durationLeft -= (mins * 60);

    secs = durationLeft;

    return [hrs, mins, secs];
  }

}
