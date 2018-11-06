import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Timestamp } from 'rxjs';
import { TimestampService } from './timestamp.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  audioFilesList$ = new BehaviorSubject<Array<AudioFile>>([]);
  list: Array<AudioFile> = [];

  constructor(private timestampService: TimestampService) { }

  addFiles(files: FileList) {
    let audioFile: AudioFile;
    const promises = [];

    [].forEach.call(files, file => {
      audioFile = this.buildModel(file);
      promises.push(this.obtainDuration(audioFile, file));
      this.list.push(audioFile);
    });
    // this.audioFilesList$.next(this.list);

    // calculate timestamps after obtaining all durations
    Promise.all(promises).then(resp => {
      if (resp.every(res => res)) { // if all responses are true
        this.calculateTimestamps();
      }
    });
  }

  calculateTimestamps() {
    let timestamp = 0;
    [].forEach.call(this.list, audioFile => {
      audioFile.rawTimestamp = timestamp;
      audioFile.timestamp = this.timestampService.getTimestamp(timestamp);
      console.log('Ustawianie timestamp z duration: ' + audioFile.duration);
      timestamp += audioFile.duration;
    });
    this.audioFilesList$.next(this.list);
  }

  obtainDuration(audioFile: AudioFile, file: File) {
    const promise = new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const audio = new Audio();
      audio.setAttribute('src', url);
      audio.addEventListener('durationchange', e => {
        if (e.target['duration']) {
          audioFile.duration = e.target['duration'];
          console.log('Wyznaczylem duration: ' + audioFile.duration);
          resolve(true);
        } else {
          console.error('Błąd w pobieraniu czasu trwania.');
          reject(false);
        }
      });
    });
    return promise;
  }

  buildModel(file: File): AudioFile {
    const model: AudioFile = {
      filename: file.name
    };
    return model;
  }

  getObservable(): Observable<Array<AudioFile>> {
    return this.audioFilesList$.asObservable();
  }
}
