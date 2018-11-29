import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Timestamp } from 'rxjs';
import { TimestampService } from './timestamp.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  audioFilesList$ = new BehaviorSubject<Array<AudioFile>>([]);
  lastTimestamp = 0;
  uploaded = false;

  constructor(private timestampService: TimestampService) { }

  addFiles(files: FileList) {
    let audioFile: AudioFile;
    const list = this.audioFilesList$.getValue();
    const promises = [];

    [].forEach.call(files, file => {
      audioFile = this.buildModel(file);
      list.push(audioFile);
      promises.push(this.obtainDuration(audioFile, file));
    });

    Promise.all(promises).then(resolve => {
      [].forEach.call(list, audiofile => {
        audiofile = this.calculateTimestamp(audiofile);
      });
    });

    this.audioFilesList$.next(list);
    this.uploaded = true;
  }

  calculateTimestamp(audioFile: AudioFile) {
    console.log(audioFile.filename);
    audioFile.rawTimestamp = this.lastTimestamp;
    audioFile.timestamp = this.timestampService.getTimestamp(this.lastTimestamp);
    this.lastTimestamp += audioFile.duration;
    console.log('Ustawianie timestamp z duration: ' + audioFile.duration);
    return audioFile;
  }

  obtainDuration(audioFile: AudioFile, file: File): Promise<AudioFile> {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const audio = new Audio();
      audio.setAttribute('src', url);
      audio.addEventListener('durationchange', e => {
        if (e.target['duration']) {
          audioFile.duration = e.target['duration'];
          console.log('Wyznaczylem duration: ' + audioFile.duration);
          resolve(audioFile);
        } else {
          console.error('Błąd w pobieraniu czasu trwania.');
          reject();
        }
      });
    });
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

  reset() {
    this.audioFilesList$.next([]);
    this.lastTimestamp = 0;
  }
}
