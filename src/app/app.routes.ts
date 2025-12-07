import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/auth-page').then((m) => m.AuthPage),
  },
  {
    path: 'categories',
    loadComponent: () => import('./pages/categories/categories-page').then((m) => m.CategoriesPage),
  },
  {
    path: 'samples',
    loadComponent: () => import('./pages/samples/samples-page').then((m) => m.SamplesPage),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
