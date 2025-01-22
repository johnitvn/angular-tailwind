import { Routes } from "@angular/router";



export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/level1/level2'
  },
  {
    path: '',
    loadComponent: () => import('./modules/layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'dashboard/level1/level2',
        loadComponent: () => import('./modules/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'auth/two-steps',
        loadComponent: () => import('./modules/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'auth/sign-in',
        loadComponent: () => import('./modules/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      }
    ]
  },
]