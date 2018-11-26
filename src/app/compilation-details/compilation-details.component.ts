import { Component, OnInit, Input } from '@angular/core';
import { CompilationService } from '../services/compilation.service';
import { FilesService } from '../services/files.service';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

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
    private router: Router) { }

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
    this.compilationService.deleteCompilation(this.compilation);
    this.router.navigate(['/compilations']);
  }

  save(input: HTMLInputElement) {
    const compilationName = input.value;
    this.compilation.name = compilationName;
    this.compilation.userId = this.authService.user.uid;
    this.compilation.created = new Date();

    this.compilationService.saveCompilation(this.compilation);
    this.filesService.reset();
    console.log(this.compilation);
    console.log(JSON.stringify(this.compilation, null, 2));
  }

  edit() {
    this.editable = true;
  }

  update() {
    this.editable = false;
    this.compilationService.updateCompilation(this.compilation);
  }

}
