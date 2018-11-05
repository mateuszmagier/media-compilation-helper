import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  audioFilesList$ = new BehaviorSubject<Array<AudioFile>>([]);
  list: Array<AudioFile> = [];

  constructor() { }

  addFiles(files: FileList) {
    let audioFile: AudioFile;
    const promises = [];

    [].forEach.call(files, file => {
      audioFile = this.buildModel(file);
      promises.push(this.obtainDuration(audioFile));
      this.list.push(audioFile);
    });
    this.audioFilesList$.next(this.list);

    Promise.all(promises).then(resp => {
      this.calculateTimestamps();
    });
  }

  calculateTimestamps() {
    let timestamp = 0;
    [].forEach.call(this.list, audioFile => {
      audioFile.timestamp = timestamp;
      console.log('Ustawianie timestamp z duration: ' + audioFile.duration);
      timestamp += audioFile.duration;
    });
    this.audioFilesList$.next(this.list);
  }

  obtainDuration(audioFile: AudioFile) {
    const promise = new Promise((resolve, reject) => {
      const url = URL.createObjectURL(audioFile.file);
      const audio = new Audio();
      audio.setAttribute('src', url);
      audio.addEventListener('durationchange', e => {
        if (e.target.duration) {
          audioFile.duration = e.target.duration;
          console.log('Wyznaczylem duration: ' + audioFile.duration);
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
    return promise;
  }

  buildModel(file: File): AudioFile {
    const model: AudioFile = {
      file: file,
      filename: file.name
    };
    return model;
  }

  getObservable(): Observable<Array<AudioFile>> {
    return this.audioFilesList$.asObservable();
  }
}
