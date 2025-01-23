import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';
import { RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { SubMenuItem } from 'src/app/modules/layout/models/menu.model';
import { SidebarService } from '../../../services/menu.service';

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
  constructor(public menuService: SidebarService) { }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void { }
}
