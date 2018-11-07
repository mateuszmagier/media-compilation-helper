import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCompilationComponent } from './new-compilation/new-compilation.component';
import { CompilationsPanelComponent } from './compilations-panel/compilations-panel.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewCompilationComponent
  },
  {
    path: 'compilations',
    component: CompilationsPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
