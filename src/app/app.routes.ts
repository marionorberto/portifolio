import { Routes } from '@angular/router';

import { HireMeComponent } from './components/hire-me/hire-me.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'hire',
    component: HireMeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
