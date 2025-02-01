import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard.component').then((m) => m.DashboardComponent),
      },

      {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then((m) => m.UsersComponent),
      },
      {
        path: 'users/create',
        loadComponent: () => import('./pages/users/create-user.component').then((m) => m.CreateUserComponent),
      },
      {
        path: 'users/update/:id',
        loadComponent: () => import('./pages/users/update-user.component').then((m) => m.UpdateUserComponent),
      },
      {
        path: 'level1',
        loadComponent: () => import('./pages/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'level1/level2',
        loadComponent: () => import('./pages/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'level1/level2/level3',
        loadComponent: () => import('./pages/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profiles/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'profile/name',
        loadComponent: () => import('./pages/profiles/name.component').then((m) => m.NameComponent),
      },
    ],
  },
];
