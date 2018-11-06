import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCompilationComponent } from './new-compilation/new-compilation.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewCompilationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
