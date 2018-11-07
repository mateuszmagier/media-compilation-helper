import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilationsPanelComponent } from './compilations-panel.component';

describe('CompilationsPanelComponent', () => {
  let component: CompilationsPanelComponent;
  let fixture: ComponentFixture<CompilationsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompilationsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilationsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
