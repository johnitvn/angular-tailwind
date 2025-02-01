import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { LayoutService } from '../../services/layout.service';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TuiButton, UserMenuComponent, NotificationMenuComponent, TuiIcon, TuiButton],
  template: `
    <div class="flex h-14 w-screen items-center bg-[var(--tui-background-base)] px-2 lg:px-4" [ngClass]="{'justify-between': this.layoutService.pageInformation?.previous}">
      <div class="flex items-center lg:w-64" [ngClass]="{'hidden lg:flex': this.layoutService.pageInformation?.previous}">
        <div class="flex justify-center" *ngIf="layoutService.pagesMenu.length > 0">
          <button tuiIconButton appearance="flat" size="s" class="!flex lg:!hidden !rounded-full" iconStart="@tui.align-justify" (click)="toggleMobileSidebar()">Mobile</button>
        </div>
        <div class="hidden lg:flex flex-1 items-center" [ngClass]="{'!flex': layoutService.pagesMenu.length == 0}">
          <b class="text-sm font-bold mr-1">eBizBase</b>
          <span>Account</span>
        </div>
      </div>
      <div class="flex-1 flex gap-3 justify-end items-center" [ngClass]="{'hidden lg:flex': this.layoutService.pageInformation?.previous}">
        <app-notification-menu class="hidden" />
        <app-user-menu />
      </div>

      <a
        *ngIf="layoutService.pageInformation?.previous"
        href="{{layoutService.pageInformation?.previous?.url}}" 
        class="lg:!hidden"
        [style.--tui-radius.%]="100"
        role="button"          
        title="Back"
        tuiIconButton
        appearance="flat"
        size="m"
        iconStart="@tui.chevron-left"
       >
      </a>  

      <h1 class="text-base lg:hidden flex-1">{{layoutService.pageInformation?.pageTitle}}</h1>
      
      <div class="flex gap-3 lg:hidden" >
        <ng-container *ngIf="layoutService.pageInformation?.actions">
          <button
            *ngFor="let action of layoutService.pageInformation?.actions"
            [style.--tui-radius.%]="100"
            tuiIconButton 
            appearance="flat"
            size="m" 
            [iconStart]="action.icon" 
            (click)="action.click && action.click()"
            >
            <span class="hidden lg:block">{{ action.title }}</span>
          </button>
        </ng-container>   
      </div>

    </div>
  `,
})
export class NavbarComponent {
  constructor(protected layoutService: LayoutService) {}

  protected toggleMobileSidebar() {
    this.layoutService.toggleMobileSidebar();
  }
}
