import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiRoot } from '@taiga-ui/core';
import { PageTitleComponent } from './components/page-title/page-title.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [TuiRoot, RouterOutlet, SidebarComponent, NavbarComponent,  PageTitleComponent],
})
export class LayoutComponent {
 
}
