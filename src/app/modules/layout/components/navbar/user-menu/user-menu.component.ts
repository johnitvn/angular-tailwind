import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDropdown, TuiFallbackSrcPipe, TuiIcon } from '@taiga-ui/core';
import { LayoutService } from '../../../services/layout.service';
import { TuiAvatar, TuiSegmented } from '@taiga-ui/kit';
import { TuiActiveZone, TuiObscured } from '@taiga-ui/cdk';
import { TuiDataListWrapper, TuiFilterByInputPipe, TuiStringifyContentPipe } from '@taiga-ui/kit';
import { TuiComboBoxModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const LANGUAGES = [
  { code: 'en', title: 'English' },
  { code: 'vn', title: 'Tiếng Việt' },
];

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
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
    TuiTextfieldControllerModule,
  ],
  styles: [
    `
      :host {
        --tui-height-l: 2.7rem;
      }
    `,
  ],
  template: `  
<tui-avatar [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async" 
  class="hover:!bg-[var(--tui-background-neutral-1-hover)] [&>img]:p-1.5"
  (click)="onClick()"
  [tuiDropdown]="userMenu"  
  [tuiDropdownManual]="open"
  [tuiObscuredEnabled]="open"
  [tuiDropdownMaxHeight]="600"
  (tuiActiveZoneChange)="onActiveZone($event)"
  (tuiObscured)="onObscured($event)"
   />    

<ng-template #userMenu>
  <div class="w-screen max-w-md bg-[var(--tui-background-neutral-1)] p-8 space-y-6">

    <div class="flex items-center space-x-4">
      <tui-avatar [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async"  size="xl" /> 
      <div>
        <div class="text-3xl">Hi John Doe!</div>
        <div class="text">john.itvn&#64;gmail.com</div>
      </div>
    </div>  
    
    
    <div class="flex justify-between w-full border rounded-full bg-[var(--tui-background-base)]">
        <div class="flex-1 p-4 space-x-2 justify-center border-r hover:bg-[var(--tui-background-neutral-1-hover)] rounded-s-full">
          <tui-icon icon="@tui.user-pen" />
          <span>Your profile</span>        
        </div>
        <div class="flex-1 p-4 space-x-2 justify-center hover:bg-[var(--tui-background-neutral-1-hover)] rounded-e-full">
          <tui-icon icon="@tui.log-out" />
          <span>Logout</span>        
        </div>
    </div>

    <tui-segmented size="l" [style.border-radius.rem]="10" class="flex justify-between">
      <button type="button" class="text-sm text-center" (click)="layoutService.setColorMode('light')">Light Mode</button>
      <button type="button" class="text-sm text-center" (click)="layoutService.setColorMode('dark')">Dark Mode</button>
      <button type="button" class="text-sm text-center" (click)="layoutService.setColorMode('monochrome')">Monochrome</button>
      <button type="button" class="text-sm text-center" (click)="layoutService.setColorMode('system')">System</button>
    </tui-segmented>

    <tui-combo-box
      class="w-full"
      tuiTextfieldSize="l"
      [tuiTextfieldLabelOutside]="true"
      [stringify]="stringify"
      [formControl]="control"> 
      <tui-data-list-wrapper
          *tuiDataList
          [itemContent]="stringify | tuiStringifyContent"
          [items]="items | tuiFilterByInput"/>
    </tui-combo-box>

 

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

  protected readonly control = new FormControl('en');
  protected readonly items = LANGUAGES.map(({ code }) => code);
  protected readonly stringify = (code: string): string => `${LANGUAGES.find((i) => i.code === code)?.title}`;
}
