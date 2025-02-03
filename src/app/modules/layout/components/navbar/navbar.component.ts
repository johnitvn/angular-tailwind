import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { LayoutService } from '../../services/layout.service';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgIf, RouterLink, TuiButton, UserMenuComponent, NotificationMenuComponent],
  template: `
   <div class="flex h-14 w-screen items-center bg-[var(--tui-background-base)] px-2 lg:px-4" 
   [ngClass]="{'hidden lg:flex': this.layoutService.info?.previous}"
   >
      <div class="flex items-center lg:w-64">
        <!-- Open sidebar (only mobile) -->
        <button 
          *ngIf="layoutService.menus.length > 0" 
          tuiIconButton 
          appearance="flat" 
          size="s" 
          class="lg:!hidden !rounded-full" 
          iconStart="@tui.align-justify" 
          (click)="toggleMobileSidebar()">
        </button>
        
        <div class="flex-1 hidden lg:flex">
          <!-- logo (only desktop) -->
          <div class="">
            <b class="text-sm font-bold mr-1">eBizBase</b>
            <span>Account</span>
          </div> 
          <!-- page title (only-mobile) -->
          <div class="lg:hidden">
              {{ layoutService.info?.heading}}
          </div>         
        </div>
      </div>
      <div class="flex flex-1 gap-3 justify-end items-center" [ngClass]="{'hidden lg:flex': this.layoutService.info?.previous}">
        <app-notification-menu class="hidden" />
        <app-user-menu />
      </div>
    </div>   

    <div class="hidden h-14 w-screen items-center bg-[var(--tui-background-base)] px-2 lg:px-4 lg:hidden" [ngClass]="{'!flex lg:!hidden': this.layoutService.info?.previous}">
      <a
        *ngIf="layoutService.info?.previous"        
        routerLink="{{layoutService.info?.previous?.url}}" 
        class="lg:!hidden lg:w-0"
        [style.--tui-radius.%]="100"
        role="button"          
        title="Back"
        tuiIconButton
        appearance="flat"
        size="m"
        iconStart="@tui.chevron-left"
       >
      </a>  

      <h1 class="text-base flex-1">{{layoutService.info?.heading}}</h1>
      
      <div class="flex gap-3" >
        <ng-container *ngIf="layoutService.info?.actions">
          <button
            *ngFor="let action of layoutService.info?.actions"
            [style.--tui-radius.%]="100"
            tuiIconButton 
            appearance="flat"
            size="m" 
            [iconStart]="action.icon" 
            (click)="action.click && action.click()"
            >
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
