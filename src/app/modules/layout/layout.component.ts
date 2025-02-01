import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiRoot } from '@taiga-ui/core';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { LayoutService } from './services/layout.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [NgClass, TuiRoot, RouterOutlet, SidebarComponent, NavbarComponent, PageTitleComponent],
  template: `
  <tui-root
    class="flex flex-col h-[calc(100dvh)] overflow-hidden"
    [attr.tuiTheme]="layoutService.isDarkMode()?'dark':'light'" 
    [ngClass]="{'grayscale':layoutService.isMonochromeMode()}"
    >
    <app-navbar></app-navbar>
    <div class="flex flex-row-reverse">
      <div
        id="main-content"
        class="flex-1 h-[calc(100dvh-3.5rem)] overflow-auto bg-[var(--tui-background-neutral-1)] scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-thumb-[var(--tui-background-neutral-2)] scrollbar-thin scrollbar-track-transparent">
        <div class="mx-auto p-4 sm:p-8">
          <app-page-title />
          <router-outlet></router-outlet>
        </div>
      </div>  
      <!-- <div class="fixed top-0 bottom-0 w-screen transition-all duration-750 backdrop-blur-[0px] lg:hidden -translate-x-full" [ngClass]="{'translate-x-0 backdrop-blur-[2px]': layoutService.mobileSidebar}" (click)="layoutService.toggleMobileSidebar()"></div> -->
      <app-sidebar></app-sidebar>      
    </div>
    
    <ng-container ngProjectAs="tuiOverContent" />
    <ng-container ngProjectAs="tuiOverDialogs" />
    <ng-container ngProjectAs="tuiOverAlerts" />
    <ng-container ngProjectAs="tuiOverDropdowns" />
    <ng-container ngProjectAs="tuiOverHints" />
  </tui-root>
`,
})
export class LayoutComponent {
  constructor(public layoutService: LayoutService) {}
}
