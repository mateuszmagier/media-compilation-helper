import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class CompilationService {

  private compilationListSubject = new BehaviorSubject<Array<AudioCompilation>>([]);

  constructor(private databaseService: DatabaseService) {
    this.init();
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
    this.databaseService.saveCompilation(compilation);
    const list = this.compilationListSubject.getValue();
    list.push(compilation);
    this.compilationListSubject.next(list);
  }
}
