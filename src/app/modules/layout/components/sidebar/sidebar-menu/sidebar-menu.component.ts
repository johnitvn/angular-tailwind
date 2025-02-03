import { Component, OnInit } from '@angular/core';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';
import { RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  imports: [
    CommonModule,
    TuiIcon,
    RouterLink,
    SidebarSubmenuComponent,
  ]
})
export class SidebarMenuComponent implements OnInit {
  constructor(public layoutService: LayoutService) { }


  ngOnInit(): void { }
}
