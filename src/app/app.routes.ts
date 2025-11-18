import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { SearchPage } from './search-page/search-page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: '', component: SearchPage },
];
