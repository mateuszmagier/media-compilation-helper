import { Component, OnInit, Input } from '@angular/core';
import { FilesService } from '../services/files.service';
import { CompilationService } from '../services/compilation.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  @Input()
  compilation: AudioCompilation;

  audioFiles: Array<AudioFile>;

  constructor(public filesService: FilesService,
    private compilationService: CompilationService,
    private authService: AuthService) {

  }

  ngOnInit() {
    this.filesService.getObservable().subscribe(list => {
      this.audioFiles = list;
    });
  }

  saveCompilation(input: HTMLInputElement) {
    const compilationName = input.value;
    this.compilation.name = compilationName;
    this.compilation.userId = this.authService.user.uid;
    this.compilation.created = new Date();

    this.compilationService.saveCompilation(this.compilation);
    this.filesService.clearFilesList();
    console.log(this.compilation);
    console.log(JSON.stringify(this.compilation, null, 2));
  }

}
