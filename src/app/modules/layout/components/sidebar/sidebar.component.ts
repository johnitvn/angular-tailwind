import { Component, OnInit } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SidebarService } from 'src/app/modules/services/menu.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [CommonModule, SidebarMenuComponent]
})
export class SidebarComponent implements OnInit {

  constructor(public menuService: SidebarService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
