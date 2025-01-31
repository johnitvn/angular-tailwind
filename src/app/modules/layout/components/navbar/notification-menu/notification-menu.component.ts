import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';
import { LayoutService } from '../../../services/layout.service';
import { TuiBadgedContent, TuiBadgeNotification } from '@taiga-ui/kit';
import { TuiObscured, TuiActiveZone } from '@taiga-ui/cdk';

@Component({
  selector: 'app-notification-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TuiButton,
    TuiDropdown,
    TuiBadgedContent,
    TuiObscured,
    TuiActiveZone,
    TuiBadgeNotification,
  ],  
  template: `
    <tui-badged-content [style.--tui-radius.%]="100">
      <tui-badge-notification size="s" tuiSlot="top">8</tui-badge-notification>
      <button
        tuiIconButton
        [style.--tui-radius.%]="100"
        appearance="flat"
        size="m"
        iconStart="@tui.bell"
        (click)="toggleDropdown()"
        [tuiDropdown]="notification"
        [tuiDropdownMaxHeight]="600"
        [tuiDropdownManual]="open"
        [tuiObscuredEnabled]="open"
        (tuiActiveZoneChange)="closeDropdownIfInactive($event)"
        (tuiObscured)="closeDropdownIfObscured($event)">
      </button>
    </tui-badged-content>

    <ng-template #notification>
      <div class="w-screen max-w-md bg-[var(--tui-background-neutral-1)] p-8">Notification</div>
    </ng-template>
  `,
})
export class NotificationMenuComponent {
  protected open = false;

  constructor(public layoutService: LayoutService) {}

  protected toggleDropdown(): void {
    this.open = !this.open;
  }

  protected closeDropdownIfObscured(obscured: boolean): void {
    if (obscured) this.open = false;
  }

  protected closeDropdownIfInactive(active: boolean): void {
    if (!active) this.open = false;
  }
}
