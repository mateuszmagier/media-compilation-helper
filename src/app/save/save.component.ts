import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';
import { CompilationService } from '../services/compilation.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  compilation: AudioCompilation;
  audiofiles: Array<AudioFile>;

  constructor(public filesService: FilesService, private compilationService: CompilationService) {

  }

  ngOnInit() {
    this.filesService.getObservable().subscribe(list => {
      this.audiofiles = list;
    });
  }

  saveCompilation(input: HTMLInputElement) {
    const compilationName = input.value;
    this.compilation = {
      name: compilationName,
      audiofiles: this.audiofiles
    };
    this.compilationService.saveCompilation(this.compilation);
    this.filesService.clearFilesList();
    console.log(this.compilation);
    console.log(JSON.stringify(this.compilation, null, 2));
  }

}
