import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from './database.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CompilationService {

  private compilationListSubject = new BehaviorSubject<Array<AudioCompilation>>([]);

  constructor(private databaseService: DatabaseService, private angularFire: AngularFireAuth) {
    this.angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.compilationListSubject.next([]); // wyczysc tablice
      }
    });
  }

  init() {
    this.databaseService.getCompilations().subscribe(list => {
      this.compilationListSubject.next(list);
    });
  }

  getCompilationListObservable(): Observable<Array<AudioCompilation>> {
    return this.compilationListSubject.asObservable();
  }

  saveCompilation(compilation: AudioCompilation) {
    this.databaseService.saveCompilation(compilation).subscribe(result => {
      compilation._id = result._id;
      const list = this.compilationListSubject.getValue();
      list.push(compilation);
      this.compilationListSubject.next(list);
    });
  }

  deleteCompilation(compilation: AudioCompilation) {
    this.databaseService.deleteCompilation(compilation);
    const list = this.compilationListSubject.getValue();
    const compilationIndex = list.indexOf(compilation);
    list.splice(compilationIndex, 1);
    this.compilationListSubject.next(list);
  }

  updateCompilation(compilation: AudioCompilation) {
    this.databaseService.updateCompilation(compilation);
  }

  getAudiofilesNumber() {
    return this.compilationListSubject.getValue().length;
  }
}
