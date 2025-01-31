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
        path: 'personal-information',
        loadComponent: () => import('./pages/profiles/personal-information.component').then((m) => m.PersonalInformationComponent),        
      },
      {
        path: 'sessions',
        loadComponent: () => import('./pages/profiles/session.component').then((m) => m.SessionComponent),        
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
    ],
  },
];
