import { Routes } from '@angular/router';

import { HireMeComponent } from './components/hire-me/hire-me.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'hire',
    component: HireMeComponent
  }
];
