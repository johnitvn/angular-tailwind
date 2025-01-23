import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TuiButton, TuiDropdown, TuiFallbackSrcPipe } from '@taiga-ui/core';
import { TuiAvatar, TuiBadgedContent, TuiBadgeNotification } from '@taiga-ui/kit';
import { SidebarService } from 'src/app/modules/services/menu.service';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TuiButton, TuiAvatar, TuiFallbackSrcPipe, TuiBadgedContent, TuiBadgeNotification, TuiDropdown],
  host: {
    'class': 'md:space-x-2 items-center'
  }
})
export class QuickActionsComponent implements OnInit {

  @Input() mode!: 'sidebar'|'navibar';  
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
