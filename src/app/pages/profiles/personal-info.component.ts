import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiFallbackSrcPipe, TuiIcon, TuiLink, TuiTextfield } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-personal-info',
  imports: [CommonModule, TuiTextfield, TuiAvatar, TuiIcon, TuiFallbackSrcPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `  
  <div class="flex flex-col gap-6">
    <div class="flex flex-col items-center lg:col-span-4">
      <div class="text-3xl mt-4">Personal info</div>
      <div class="text-center mt-4">Info about you and your preferences across eBizBase services</div>
    </div>     

    <!-- Name Options -->
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg lg:col-span-2 border border-[var(--tui-background-neutral-1-hover)]">
      <div class="py-3 px-4">
        <h2 class="text-lg">Basic Info</h2>
        <h3 class="text-[var(--tui-text-secondary)]">visible to others so they can reach you easily</h3>
      </div>
      <!-- Profile Image -->
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)] max-w-60">Profile Picture</div>
          <div class="flex lg:flex-1 space-x-1">A profile picture helps personalize your account</div>
        </div>
        <tui-avatar class="w-24" [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async"  size="xl" /> 
      </div>
      <!-- Display name --> 
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t rounded-b-lg border-[var(--tui-background-neutral-1-hover)]">
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)] max-w-60">Display Name</div>
          <div class="text-base flex lg:flex-1 space-x-1 items-center">John Martin</div>
        </div>
        <div class="w-24 text-right"><tui-icon icon="@tui.chevron-right" /></div>        
      </div>                 
    </div>

    
  </div>
  `,
})
export class PersonalInfoComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {
    this.layoutService.pageInformation = {
      title: 'eBizBase Account',
      size: 'm'
    };
  }

  ngOnInit(): void {}
}
