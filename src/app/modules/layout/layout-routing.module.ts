import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/level1/level2'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
     {
        path: 'dashboard/level1/level2',
        loadComponent: () => import('../dashboard/dashboard.component').then((m) => m.DashboardComponent),
     }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
