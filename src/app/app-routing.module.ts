import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCompilationComponent } from './new-compilation/new-compilation.component';
import { CompilationsPanelComponent } from './compilations-panel/compilations-panel.component';
import { CompilationComponent } from './compilation/compilation.component';
import { LoginComponent } from './auth/login/login.component';
import { CompilationDetailsComponent } from './compilation-details/compilation-details.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new',
    component: NewCompilationComponent
  },
  {
    path: 'compilations',
    component: CompilationsPanelComponent,
    children: [
      {
        path: ':id', // compilations/1
        component: CompilationComponent,
        children: [
          {
            path: '',
            component: CompilationDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
