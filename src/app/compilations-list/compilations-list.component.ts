import { Component, OnInit } from '@angular/core';
import { CompilationService } from '../services/compilation.service';

@Component({
  selector: 'app-compilations-list',
  templateUrl: './compilations-list.component.html',
  styleUrls: ['./compilations-list.component.scss']
})
export class CompilationsListComponent implements OnInit {

  compilationsList: Array<AudioCompilation>;

  constructor(private compilationService: CompilationService) {
    this.compilationService.getCompilationListObservable().subscribe(list => {
      this.compilationsList = list;
    });
  }

  ngOnInit() {
  }

}
