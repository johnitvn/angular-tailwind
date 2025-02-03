import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from './modules/layout/models/menu.model';
import { LayoutService } from './modules/layout/services/layout.service';

const pages: MenuItem[] = [
  {
    group: 'Base',
    separator: false,
    items: [
      {
        icon: '@tui.layout-dashboard',
        label: 'Dashboard',
        route: '/dashboard',
      },
      {
        icon: '@tui.users-round',
        label: 'Users',
        route: '/users',
        children: [
          { label: 'User listing', route: '/users' },
          { label: 'Create new user', route: '/users/create' },
        ],
      },
      {
        icon: '@tui.circle-gauge',
        label: 'Mutil levels',
        route: '/level1',
        children: [
          {
            label: 'Child Level',
            route: '/level1',
            children: [
              {
                label: 'Child Level',
                route: '/level1/level2',
                children: [
                  { label: 'Child Level', route: '/level1/level2/level3' },
                  { label: 'Sign in', route: '/auth/sign-in' },
                  { label: 'Forgot Password', route: '/auth/forgot-password' },
                  { label: 'New Password', route: '/auth/new-password' },
                  { label: 'Two Steps', route: '/auth/two-steps' },
                ],
              },
              { label: 'Sign up', route: '/auth/sign-up' },
              { label: 'Sign in', route: '/auth/sign-in' },
              { label: 'Forgot Password', route: '/auth/forgot-password' },
              { label: 'New Password', route: '/auth/new-password' },
            ],
          },
          { label: 'Sign in', route: '/auth/sign-in' },
          { label: 'Forgot Password', route: '/auth/forgot-password' },
          { label: 'New Password', route: '/auth/new-password' },
          { label: 'Two Steps', route: '/auth/two-steps' },
        ],
      },
    ],
  },
  {
    group: 'Profile',
    items: [
      {
        icon: '@tui.id-card',
        label: 'Personal Info',
        route: '/profile/personal-info',
      },     
      {
        icon: '@tui.lock-keyhole',
        label: 'Security',
        route: '/profile/security',
      },    
      {
        icon: '@tui.lock-keyhole',
        label: 'Privacy',
        route: '/profile/privacy',
      },          
    ],
  },
 
];

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private sidebarService: LayoutService) {
    /** Set dynamic menu */
    this.sidebarService.menus = pages;
  }
}
