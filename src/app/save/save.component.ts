import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  compilation: AudioCompilation;
  audiofiles: Array<AudioFile>;

  constructor(public filesService: FilesService) { }

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
    console.log(this.compilation);
  }

}
