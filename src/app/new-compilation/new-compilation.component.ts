import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-new-compilation',
  templateUrl: './new-compilation.component.html',
  styleUrls: ['./new-compilation.component.scss']
})
export class NewCompilationComponent {

  compilation: AudioCompilation;

  constructor(private filesService: FilesService) {
    this.filesService.getObservable().subscribe(list => {
      this.compilation = {
        audiofiles: list
      };
    });
  }

}
