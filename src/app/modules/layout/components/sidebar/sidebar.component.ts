import { Component, OnInit } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CommonModule } from '@angular/common';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { LayoutService } from '../../services/layout.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [CommonModule, SidebarMenuComponent, QuickActionsComponent]
})
export class SidebarComponent implements OnInit {

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
}
