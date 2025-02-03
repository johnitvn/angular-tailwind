import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from './modules/layout/models/menu.model';
import { LayoutService } from './modules/layout/services/layout.service';

const pages: MenuItem[] = [
  {
    items: [   
      {
        icon: '@tui.id-card',
        label: 'Personal Info',
        route: '/personal-info',
      },     
      {
        icon: '@tui.lock-keyhole',
        label: 'Security',
        route: '/security',
      },    
      {
        icon: '@tui.lock-keyhole',
        label: 'Privacy',
        route: '/privacy',
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
