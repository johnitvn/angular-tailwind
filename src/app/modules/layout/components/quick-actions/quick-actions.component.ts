import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TuiButton, TuiDropdown, TuiFallbackSrcPipe } from '@taiga-ui/core';
import { TuiAvatar, TuiBadgedContent, TuiBadgeNotification } from '@taiga-ui/kit';
import { LayoutService } from '../../services/layout.service';

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
