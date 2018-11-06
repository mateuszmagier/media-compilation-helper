import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SaveComponent } from '../save/save.component';

@Component({
  selector: 'app-new-compilation',
  templateUrl: './new-compilation.component.html',
  styleUrls: ['./new-compilation.component.scss']
})
export class NewCompilationComponent implements OnInit, AfterViewInit {

  @ViewChild('saveRef')
  saveComponent: SaveComponent;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges(); // prevents ExpressionChangedAfterItHasBeenCheckedError
  }

}
