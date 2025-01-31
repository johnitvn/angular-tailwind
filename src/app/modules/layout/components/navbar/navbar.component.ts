import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { LayoutService } from '../../services/layout.service';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
      CommonModule, 
      TuiButton,    
      UserMenuComponent,
      NotificationMenuComponent    
    ],
    template: `
  <div class="flex h-14 items-center bg-[var(--tui-background-base)] px-4">
    <div class="flex items-center lg:w-64">
      <div class="flex justify-center">
        <button tuiIconButton appearance="flat" size="s" class="!flex lg:!hidden !rounded-full" iconStart="@tui.align-justify" (click)="toggleMobileSidebar()">Mobile</button>
      </div>
      <div class="hidden lg:flex flex-1 items-center">
        <b class="text-sm font-bold mr-1">eBizBase</b>
        <span>Account</span>
      </div>
    </div>
    <div class="flex-1 flex gap-3 justify-end items-center">
      <app-notification-menu />
      <app-user-menu />
    </div>
  </div>  
  `
})
export class NavbarComponent {


  constructor(protected layoutService: LayoutService) { }

  protected toggleMobileSidebar() {
    this.layoutService.toggleMobileSidebar();
  }

 

 

}
