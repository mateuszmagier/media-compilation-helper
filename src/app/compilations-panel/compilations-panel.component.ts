import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CompilationService } from '../services/compilation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-compilations-panel',
  templateUrl: './compilations-panel.component.html',
  styleUrls: ['./compilations-panel.component.scss']
})
export class CompilationsPanelComponent {

  compilations: Array<AudioCompilation>;

  constructor(public compilationService: CompilationService, private route: ActivatedRoute) {
    this.compilationService.getCompilationListObservable().subscribe(list => {
      this.compilations = list;
    });
  }

}
