import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CompilationService } from '../services/compilation.service';

@Component({
  selector: 'app-compilation-export',
  templateUrl: './compilation-export.component.html',
  styleUrls: ['./compilation-export.component.scss']
})
export class CompilationExportComponent implements OnInit {

  compilation: AudioCompilation;
  compilationStrings: string[];

  constructor(private compilationService: CompilationService) { }

  ngOnInit() {
    this.compilation = this.compilationService.getActiveCompilation();
  }

  format() {
    console.log('Works fine: ' + this.compilation.name);
    // console.log(this.compilationService.testFormat(this.compilation));
    this.compilationStrings = this.compilationService.testFormat(this.compilation);
  }

}
