import { Component, Input, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterModule } from '@angular/router';
import { CommonModule, NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { SubMenuItem } from 'src/app/core/menu.model';
import { MenuService } from 'src/app/core/menu.service';
import { TuiIcon } from '@taiga-ui/core';

@Component({
    selector: 'app-sidebar-submenu',
    templateUrl: './sidebar-submenu.component.html',
    styleUrls: ['./sidebar-submenu.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        RouterLink,
        TuiIcon
    ]
})
export class SidebarSubmenuComponent implements OnInit {
  @Input() public submenu = <SubMenuItem>{};

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
