import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCompilationComponent } from './new-compilation/new-compilation.component';
import { CompilationsListComponent } from './compilations-list/compilations-list.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewCompilationComponent
  },
  {
    path: 'compilations',
    component: CompilationsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
