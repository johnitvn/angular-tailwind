import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { SubMenuItem } from 'src/app/modules/layout/models/menu.model';
import { LayoutService } from '../../../services/layout.service';

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

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}

  public toggleMenu(menu: any) {
    this.layoutService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
