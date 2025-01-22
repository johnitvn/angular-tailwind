import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, NgClass, NgTemplateOutlet, NgIf, CommonModule } from '@angular/common';
import { SubMenuItem } from 'src/app/core/menu.model';
import { MenuService } from 'src/app/core/menu.service';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TuiIcon,
    RouterLink,
    SidebarSubmenuComponent,
  ]
})
export class SidebarMenuComponent implements OnInit {
  constructor(public menuService: MenuService) { }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void { }
}
