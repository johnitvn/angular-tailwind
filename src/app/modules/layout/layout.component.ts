import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiRoot } from '@taiga-ui/core';
import { PageTitleComponent } from './components/page-title/page-title.component';

@Component({
  selector: 'app-layout',
  imports: [TuiRoot, RouterOutlet, SidebarComponent, NavbarComponent,  PageTitleComponent],
  template: `
  <tui-root tuiTheme="light" class="flex flex-col h-screen w-full overflow-hidden bg-[]">
    <app-navbar></app-navbar>
    <div class="flex-1 flex grow content-start overflow-hidden h-full">
      <app-sidebar></app-sidebar>
      <div
        id="main-content"
        class="scrollbar-thumb-rounded scrollbar-track-rounded grow overflow-auto scrollbar-thin scrollbar-track-transparent">
        <div class="mx-auto px-4 sm:px-8">
          <app-page-title />
          <router-outlet></router-outlet>
        </div>
      </div>  
    </div>

  <ng-container ngProjectAs="tuiOverContent" />
  <ng-container ngProjectAs="tuiOverDialogs" />
  <ng-container ngProjectAs="tuiOverAlerts" />
  <ng-container ngProjectAs="tuiOverDropdowns" />
  <ng-container ngProjectAs="tuiOverHints" />
  </tui-root>
`
})
export class LayoutComponent {
 
}
