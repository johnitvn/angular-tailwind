import { Component, HostBinding, OnInit } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';
import { clsx } from 'clsx';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, SidebarMenuComponent],
  template: `<app-sidebar-menu></app-sidebar-menu>`,
})
export class SidebarComponent  {
  constructor(public layoutService: LayoutService) {}

  @HostBinding('class') get classes() {
    return clsx(
      'scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-thumb-card scrollbar-thin scrollbar-track-transparent  overflow-auto',
      'transition-all duration-300',
      'w-64 px-2 md:px-3 lg:px-4',
      'bg-[var(--tui-background-base)] lg:bg-[var(--tui-background-neutral-1)]',
      'fixed top-0 h-full -translate-x-full flex-col justify-between lg:relative lg:flex lg:translate-x-0',
      {
        'z-10 !translate-x-0': this.layoutService.mobileSidebar,      
      }
    );
  }
}
