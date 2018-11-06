import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompilationComponent } from './new-compilation.component';

describe('NewCompilationComponent', () => {
  let component: NewCompilationComponent;
  let fixture: ComponentFixture<NewCompilationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCompilationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
