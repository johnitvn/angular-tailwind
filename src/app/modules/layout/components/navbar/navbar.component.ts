import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TuiButton, TuiDropdown, TuiFallbackSrcPipe, TuiIcon } from '@taiga-ui/core';
import { LayoutService } from '../../services/layout.service';
import { TuiAvatar, TuiBadgedContent, TuiBadgeNotification , TuiSegmented} from '@taiga-ui/kit';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TuiButton, TuiDropdown, TuiIcon, TuiAvatar, TuiFallbackSrcPipe, TuiSegmented, TuiBadgedContent, TuiBadgeNotification, TuiDropdown]
})
export class NavbarComponent {

  protected userMenuOpened = false;
  protected notificationMenuOpened = false;
  protected themeMenuOpened = false;

  constructor(protected layoutService: LayoutService) { }

  protected toggleMobileSidebar() {
    this.layoutService.toggleMobileSidebar();
  }

  protected toogleNotificatonMenu(): void {
    this.notificationMenuOpened = !this.notificationMenuOpened;
  }

  protected toogleUserMenu(): void {
    this.userMenuOpened = !this.userMenuOpened;    
  }

  protected toogleThemeMenu(): void {
    this.themeMenuOpened = !this.themeMenuOpened;
  }


}
