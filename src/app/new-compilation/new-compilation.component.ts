import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SaveComponent } from '../save/save.component';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-new-compilation',
  templateUrl: './new-compilation.component.html',
  styleUrls: ['./new-compilation.component.scss']
})
export class NewCompilationComponent implements OnInit {

  // @ViewChild('saveRef')
  // saveComponent: SaveComponent;

  compilation: AudioCompilation;

  constructor(private filesService: FilesService) {
    this.filesService.getObservable().subscribe(list => {
      this.compilation = {
        audiofiles: list
      };
    });
  }
  // constructor(private cdr: ChangeDetectorRef, private filesService: FilesService) {
  //   this.filesService.getObservable().subscribe(list => {
  //     this.compilation = {
  //       audiofiles: list
  //     };
  //   });
  // }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   this.cdr.detectChanges(); // prevents ExpressionChangedAfterItHasBeenCheckedError
  // }

}
