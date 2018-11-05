import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {

  options = {
    zeroPrefix: true, // add "0" before elements less than 10 - all elements have 2 digits
    includeHours: true // forces generating timestamp in HH:MM:SS format
  };

  constructor() { }

  setOptions(options) {
    this.options = Object.assign({}, this.options, options);
  }

  // helper method: adds "0" prefix before numbers < 10
  prefixZero(number) {
    let prefix = '';
    if (number < 10 && this.options.zeroPrefix) {
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

    if (this.options.includeHours) {
      hrs = Math.floor(durationLeft / 3600);
      durationLeft -= (hrs * 3600);
    }

    mins = Math.floor(durationLeft / 60);
    durationLeft -= (mins * 60);

    secs = durationLeft;

    return [hrs, mins, secs];
  }

  // main function converting duration to [HH:]MM:SS format
  getTimestamp(duration) {
    let timestamp = ''; // duration converted to format: [HH:]MM:SS
    const [hrs, mins, secs] = this.calculateTimestamp(duration);
    if (this.options.includeHours) {
      timestamp += this.prefixZero(hrs) + ':';
    }
    timestamp += this.prefixZero(mins) + ':' + this.prefixZero(secs);
    return timestamp;
  }
}
