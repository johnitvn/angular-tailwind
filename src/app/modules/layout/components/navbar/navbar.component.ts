import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TuiButton, TuiDropdown, QuickActionsComponent]
})
export class NavbarComponent implements OnInit {

  protected userMenuOpened = false;
  protected notificationMenuOpened = false;

  constructor(protected layoutService: LayoutService) { }

  ngOnInit(): void { }

  protected toggleSidebar() {
    this.layoutService.toggleSidebar();
  }

  protected toggleMobileSidebar() {
    this.layoutService.toggleMobileSidebar();
  }

  protected toogleNotificatonMenu(): void {
    this.notificationMenuOpened = !this.notificationMenuOpened;
  }

  protected toogleUserMenu(): void {
    this.userMenuOpened = !this.userMenuOpened;
  }





}
