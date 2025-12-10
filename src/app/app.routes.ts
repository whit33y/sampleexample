import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { noAuthGuard } from './guards/no-auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [noAuthGuard],
    loadComponent: () => import('./pages/auth/auth-page').then((m) => m.AuthPage),
  },
  {
    path: 'categories',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/categories/categories-page').then((m) => m.CategoriesPage),
  },
  {
    path: 'samples',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/samples/samples-page').then((m) => m.SamplesPage),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
