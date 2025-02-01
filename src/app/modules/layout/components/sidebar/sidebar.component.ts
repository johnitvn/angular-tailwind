import { Component, HostBinding, OnInit } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';
import { clsx } from 'clsx';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, SidebarMenuComponent],
  template: `
  <div class="flex lg:hidden items-center h-14">
    <b class="text-sm font-bold mr-1">eBizBase</b>
    <span>Account</span>
  </div>  
  <app-sidebar-menu></app-sidebar-menu>  
`,
})
export class SidebarComponent  {
  constructor(public layoutService: LayoutService) {}

  @HostBinding('class') get classes() {
    return clsx(
      'scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-thumb-card scrollbar-thin scrollbar-track-transparent overflow-auto',
      'transition-all duration-300',
      'w-72 px-2 md:px-3 lg:px-4',
      'bg-[var(--tui-background-base)]',
      'fixed left-0 top-0 h-[calc(100dvh-3.5rem)] flex-col justify-between lg:relative lg:flex -translate-x-full lg:translate-x-0',
      {
        '!translate-x-0 h-[calc(100dvh)]': this.layoutService.mobileSidebar,      
      }
    );
  }
}
