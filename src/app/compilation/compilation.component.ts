import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compilation',
  templateUrl: './compilation.component.html',
  styleUrls: ['./compilation.component.scss']
})
export class CompilationComponent implements OnInit {

  @Input()
  compilation: AudioCompilation;

  constructor() {  }

  ngOnInit() {
  }

}
