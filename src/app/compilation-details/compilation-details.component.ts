import { Component, OnInit, Input } from '@angular/core';
import { CompilationService } from '../services/compilation.service';
import { FilesService } from '../services/files.service';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-compilation-details',
  templateUrl: './compilation-details.component.html',
  styleUrls: ['./compilation-details.component.scss']
})
export class CompilationDetailsComponent implements OnInit {

  @Input()
  compilation: AudioCompilation;

  newCompilationMode: boolean;
  editable: boolean;

  constructor(private compilationService: CompilationService,
    public filesService: FilesService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      const id = param.get('id');
      console.log('ID:' + id);
      if (id) { // component is used to displaying compilation from list (My compilations)
        this.compilationService.getCompilationListObservable().subscribe(list => {
          this.compilation = list[id - 1];
          this.compilationService.setActiveCompilation(this.compilation);
        });
        this.newCompilationMode = false;
      } else {
        this.newCompilationMode = true;
      }
      this.editable = this.newCompilationMode;
    });
  }

  delete() {
    const msg = 'Compilation ' + this.compilation.name + ' was successfully deleted.';
    this.compilationService.deleteCompilation(this.compilation);
    this.router.navigate(['/compilations']);
    this.alertService.info(msg);
  }

  save(input: HTMLInputElement) {
    const compilationName = input.value;
    this.compilation.name = compilationName;
    this.compilation.userId = this.authService.user.uid;
    this.compilation.created = new Date();

    this.compilationService.saveCompilation(this.compilation);
    this.filesService.reset();
    const msg = 'Compilation ' + this.compilation.name + ' was successfully created.';
    this.alertService.success(msg);
  }

  edit() {
    this.editable = true;
    this.filesService.setAudiofilesList(this.compilation.audiofiles);
  }

  update() {
    const msg = 'Compilation ' + this.compilation.name + ' was successfully updated.';
    this.editable = false;
    this.compilationService.updateCompilation(this.compilation);
    this.router.navigate(['/compilations']);
    this.alertService.success(msg);
  }

  moveUp(index: number) {
    console.log('moveUp: ' + index);
    this.filesService.replace(index - 1, index);
  }
  moveDown(index: number) {
    console.log('moveDown: ' + index);
    this.filesService.replace(index, index + 1);
  }
  remove(index: number) {
    console.log('remove: ' + index);
    this.filesService.remove(index);
  }

}
