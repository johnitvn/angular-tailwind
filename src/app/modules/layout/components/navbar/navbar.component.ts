import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TuiButton, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { SidebarService } from '../../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TuiButton, TuiIcon, TuiDropdown, QuickActionsComponent]
})
export class NavbarComponent implements OnInit {

  protected userMenuOpened = false;
  protected notificationMenuOpened = false;

  constructor(protected sidebarService: SidebarService) { }

  ngOnInit(): void { }

  protected toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  protected toggleMobileSidebar() {
    this.sidebarService.toggleMobileSidebar();
  }

  protected toogleNotificatonMenu(): void {
    this.notificationMenuOpened = !this.notificationMenuOpened;
  }

  protected toogleUserMenu(): void {
    this.userMenuOpened = !this.userMenuOpened;
  }





}
