import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDropdown, TuiFallbackSrcPipe, TuiIcon } from '@taiga-ui/core';
import { LayoutService } from '../../../services/layout.service';
import { TuiAvatar, TuiSegmented } from '@taiga-ui/kit';
import { TuiActiveZone, TuiObscured } from '@taiga-ui/cdk';

@Component({
  selector: 'app-user-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TuiIcon,
    TuiAvatar,
    TuiDropdown,
    TuiObscured,
    TuiActiveZone,
    TuiFallbackSrcPipe,
    TuiSegmented,
  ],
  styles: [
    `:host{
      --tui-height-l: 2.7rem
    }`
  ],
  template: `  
<tui-avatar [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async" 
  class="hover:!bg-[var(--tui-background-neutral-1-hover)] [&>img]:p-1.5"
  (click)="onClick()"
  [tuiDropdown]="userMenu"  
  [tuiDropdownManual]="open"
  [tuiObscuredEnabled]="open"
  (tuiActiveZoneChange)="onActiveZone($event)"
  (tuiObscured)="onObscured($event)"
   />    

<ng-template #userMenu>
  <div class="w-screen max-w-md bg-[var(--tui-background-neutral-1)] p-8">

  <div class="flex flex-col items-center">
    <tui-avatar [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async"  size="m" /> 
    <div class="text-2xl">Hi John Doe!</div>
    <div class="text">john.itvn&#64;gmail.com</div>
  </div>  
  
  
  <div class="flex justify-between w-full border rounded-full bg-[var(--tui-background-base)] mt-8">
      <div class="flex-1 p-4 space-x-2 border-r">
        <tui-icon icon="@tui.mail" />
        <span>Your profile</span>        
      </div>
      <div class="flex-1 p-4 space-x-2">
        <tui-icon icon="@tui.mail" />
        <span>Logout</span>        
      </div>
  </div>


    <div class="flex items-center mt-8" >
      <span class="flex-1">Color Mode</span>
      <tui-segmented size="m" [style.border-radius.rem]="10">
        <button type="button">Light</button>
        <button type="button">Dark</button>
        <button type="button">System</button>
      </tui-segmented>
    </div>
  </div>
</ng-template>    
  `,
})
export class UserMenuComponent {
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
