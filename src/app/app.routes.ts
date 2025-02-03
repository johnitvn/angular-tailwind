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
        path: 'profile/personal-info',
        loadComponent: () =>
          import('./pages/profiles/personal-info/personal-info.component').then((m) => m.PersonalInfoComponent),
      },
      {
        path: 'profile/personal-info/display-name',
        loadComponent: () =>
          import('./pages/profiles/personal-info/display-name.component').then((m) => m.DisplayNameComponent),
      },
      {
        path: 'profile/personal-info/avatar',
        loadComponent: () => import('./pages/profiles/personal-info/avatar.component').then((m) => m.AvatarComponent),
      },
      {
        path: 'profile/security',
        loadComponent: () => import('./pages/profiles/security/security.component').then((m) => m.SecurityComponent),
      },
      {
        path: 'profile/privacy',
        loadComponent: () => import('./pages/profiles/privacy/privacy.component').then((m) => m.PrivacyComponent),
      },
    ],
  },
];
