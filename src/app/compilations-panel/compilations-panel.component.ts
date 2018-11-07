import { Component, OnInit } from '@angular/core';
import { CompilationService } from '../services/compilation.service';

@Component({
  selector: 'app-compilations-panel',
  templateUrl: './compilations-panel.component.html',
  styleUrls: ['./compilations-panel.component.scss']
})
export class CompilationsPanelComponent implements OnInit {

  compilations: Array<AudioCompilation>;
  activeCompilation: AudioCompilation;

  constructor(private compilationService: CompilationService) {
    this.compilationService.getCompilationListObservable().subscribe(list => {
      this.compilations = list;
      this.activeCompilation = list[3];
    });
  }

  ngOnInit() {
  }

}
