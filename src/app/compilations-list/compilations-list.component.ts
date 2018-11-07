import { Component, OnInit, Input } from '@angular/core';
import { CompilationService } from '../services/compilation.service';

@Component({
  selector: 'app-compilations-list',
  templateUrl: './compilations-list.component.html',
  styleUrls: ['./compilations-list.component.scss']
})
export class CompilationsListComponent implements OnInit {

  @Input()
  compilations: Array<AudioCompilation>;

  constructor() {  }

  ngOnInit() {
  }

}
