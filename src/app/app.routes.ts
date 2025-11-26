import { Routes } from '@angular/router';
import { Weather } from './components/weather/weather';

export const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },

  { path: 'weather', component: Weather },
];
