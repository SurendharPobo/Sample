import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './Components/reactive/reactive.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { DirectiveComponent } from './Components/directive/directive.component';
import { DataComponent } from './Components/data/data.component';
import { StringCheckComponent } from './Components/string-check/string-check.component';
import { ParentComponent } from './Components/parent/parent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reactive',
    pathMatch: 'full'
  },

  {
    path: 'reactive',
    component: ReactiveComponent
  },

  {
    path: 'data',
    component: DataComponent
  },

  {
    path: 'string-check',
    component: StringCheckComponent
  },

  {
    path: 'parent',
    component: ParentComponent
  },
  
  {
    path: 'forbidden',
    component: ReactiveComponent
  },

  {
    path: 'directive',
    component: DirectiveComponent
  },

  {
    path: 'underconstraction',
    component: PageNotFoundComponent
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
