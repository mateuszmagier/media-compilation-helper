import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CompilationService } from '../services/compilation.service';

@Component({
  selector: 'app-compilation',
  templateUrl: './compilation.component.html',
  styleUrls: ['./compilation.component.scss']
})
export class CompilationComponent implements OnInit {

  @Input()
  compilation: AudioCompilation;

  constructor(private compilationService: CompilationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      const id = param.get('id');
      if (id) { // component is used to displaying compilation from list (My compilations)
        this.compilationService.getCompilationListObservable().subscribe(list => {
          this.compilation = list[id - 1];
        });
      }
    });
  }

}
