import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./modules/pages/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'users',
        loadComponent: () => import('./modules/pages/users.component').then((m) => m.UsersComponent),        
      },
      {
        path: 'users/create',
        loadComponent: () => import('./modules/pages/create-user.component').then((m) => m.CreateUserComponent),
      },
      {
        path: 'users/update/:id',
        loadComponent: () => import('./modules/pages/update-user.component').then((m) => m.UpdateUserComponent),
      },
    ],
  },
];
