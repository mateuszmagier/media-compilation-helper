import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompilationService } from '../services/compilation.service';

@Component({
  selector: 'app-compilation',
  templateUrl: './compilation.component.html',
  styleUrls: ['./compilation.component.scss']
})
export class CompilationComponent implements OnInit {

  @Input()
  compilation: AudioCompilation;

  newCompilationMode: boolean;

  constructor(private compilationService: CompilationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      const id = param.get('id');
      if (id) { // component is used to displaying compilation from list (My compilations)
        this.compilationService.getCompilationListObservable().subscribe(list => {
          this.compilation = list[id - 1];
        });
        this.newCompilationMode = false;
      } else {
        this.newCompilationMode = true;
      }
    });
  }

  delete() {
    this.compilationService.deleteCompilation(this.compilation);
    this.router.navigate(['/compilations']);
  }

}
