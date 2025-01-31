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
  imports: [NgClass, TuiRoot, RouterOutlet, SidebarComponent, NavbarComponent,  PageTitleComponent],
  template: `
  <tui-root tuiTheme="light" class="flex flex-col h-screen w-full overflow-hidden">
    <app-navbar></app-navbar>
    <div class="flex-1 flex flex-row-reverse grow content-start overflow-hidden h-full">
      <div
        id="main-content"
        class="scrollbar-thumb-rounded scrollbar-track-rounded grow overflow-auto scrollbar-thin scrollbar-track-transparent  bg-[var(--tui-background-neutral-1)]">
        <div class="mx-auto px-4 sm:px-8">
          <app-page-title />
          <router-outlet></router-outlet>
        </div>
      </div>  
      <app-sidebar></app-sidebar>
    </div>

  <ng-container ngProjectAs="tuiOverContent" />
  <ng-container ngProjectAs="tuiOverDialogs" />
  <ng-container ngProjectAs="tuiOverAlerts" />
  <ng-container ngProjectAs="tuiOverDropdowns" />
  <div class="top-0 left-72 w-screen h-screen transition-all duration-750 backdrop-blur-[0px]" [ngClass]="{'!fixed lg:!hidden backdrop-blur-[2px]': layoutService.mobileSidebar}" (click)="layoutService.toggleMobileSidebar()"></div>
  <ng-container ngProjectAs="tuiOverHints" />
  </tui-root>
`
})
export class LayoutComponent {

  constructor(public layoutService: LayoutService){

  }
 
}
