import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiRoot } from '@taiga-ui/core';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { LayoutService } from './services/layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, TuiRoot, RouterOutlet, SidebarComponent, NavbarComponent, PageTitleComponent],
  template: `
  <tui-root
    class="flex flex-col h-[calc(100dvh)] overflow-hidden text-base"
    [attr.tuiTheme]="layoutService.isDarkMode()?'dark':'light'" 
    [ngClass]="{'grayscale':layoutService.isMonochromeMode()}"
    >
    <app-navbar></app-navbar>
    <div class="flex flex-row-reverse">
      <div
        id="main-content"
        class="flex-1 h-[calc(100dvh-3.5rem)] overflow-y-auto overflow-x-hidden bg-[var(--tui-background-neutral-1)] scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-thumb-[var(--tui-background-neutral-2)] scrollbar-thin scrollbar-track-transparent scrollbar-corner-rounded-full">
        <div class="w-full bg-[var(--tui-background-base)] lg:bg-[var(--tui-background-base-alt)]" >
          <app-page-title 
           *ngIf="layoutService.info?.previous || layoutService.info?.actions || layoutService.info?.heading" 
            class="hidden lg:flex items-center h-full mx-auto px-8 py-8" 
            [ngClass]="{
            'max-w-2xl': layoutService.info?.size ==='xs',
            'max-w-3xl': layoutService.info?.size ==='s',
            'max-w-4xl': layoutService.info?.size ==='m',
            'max-w-5xl': layoutService.info?.size ==='l',
            'max-w-6xl': layoutService.info?.size ==='xl',
            'max-w-7xl': layoutService.info?.size ==='xxl',
          }" />
        </div>
        <div class="mx-auto p-4 sm:p-8 pb-8" [ngClass]="{
            'max-w-2xl': layoutService.info?.size ==='xs',
            'max-w-3xl': layoutService.info?.size ==='s',
            'max-w-4xl': layoutService.info?.size ==='m',
            'max-w-5xl': layoutService.info?.size ==='l',
            'max-w-6xl': layoutService.info?.size ==='xl',
            'max-w-7xl': layoutService.info?.size ==='xxl',
          }">
          <router-outlet></router-outlet>
        </div>
      </div>  
      <div class="fixed top-0 bottom-0 w-screen transition-all duration-750 backdrop-blur-[0px] lg:hidden -translate-x-full"
        [ngClass]="{'translate-x-0 backdrop-blur-[2px]': layoutService.mobileSidebarOpened}" 
        (click)="layoutService.toggleMobileSidebar()"
        (wheel)="$event.preventDefault()"
        (touchmove)="$event.preventDefault()"
        >
      </div>
      <app-sidebar *ngIf="layoutService.menus.length > 0"></app-sidebar>      
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
