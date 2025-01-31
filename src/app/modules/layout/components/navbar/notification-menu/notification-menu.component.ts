import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiDropdown, TuiFallbackSrcPipe, TuiIcon } from '@taiga-ui/core';
import { LayoutService } from '../../../services/layout.service';
import { TuiAvatar, TuiBadgedContent, TuiBadgeNotification, TuiSegmented } from '@taiga-ui/kit';
import { TuiObscured, TuiActiveZone } from '@taiga-ui/cdk';

@Component({
  selector: 'app-notification-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TuiButton, TuiDropdown, TuiDropdown, TuiBadgedContent,
    TuiObscured,
    TuiActiveZone, TuiBadgeNotification],
  template: `
    <tui-badged-content>
      <tui-badge-notification size="s" tuiSlot="top">8</tui-badge-notification>
      <button
        tuiIconButton
        class="!rounded-full"
        appearance="flat"
        size="m"
        iconStart="@tui.bell"
        (click)="onClick()"
        [tuiDropdown]="notification"  
        [tuiDropdownManual]="open"
        [tuiObscuredEnabled]="open"
        (tuiActiveZoneChange)="onActiveZone($event)"
        (tuiObscured)="onObscured($event)"
        >
      </button>
    </tui-badged-content>
    <ng-template #notification>
      <div class="w-screen max-w-md bg-[var(--tui-background-neutral-1)] p-8">
      Notification
      </div>
    </ng-template>
  `,
})
export class NotificationMenuComponent {
  protected open = false;

  constructor(public layoutService: LayoutService) {}

  protected onClick(): void {
    this.open = !this.open;
  }

  protected onObscured(obscured: boolean): void {
    if (obscured) {
      this.open = false;
    }
  }

  protected onActiveZone(active: boolean): void {
    this.open = active && this.open;
  }
}
