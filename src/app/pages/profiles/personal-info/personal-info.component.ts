import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiFallbackSrcPipe, TuiIcon, TuiLink, TuiTextfield } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-personal-info',
  imports: [CommonModule, TuiTextfield, TuiAvatar, TuiIcon, TuiFallbackSrcPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `  
  <div class="flex flex-col items-center pb-10">
  <div class="text-3xl mt-4">Personal info</div>
  <div class="text-center mt-4">Info about you and your preferences across eBizBase services</div>
  </div>     

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

    <!-- Name Options -->
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg lg:col-span-2 border border-[var(--tui-background-neutral-1-hover)]">
      <div class="py-3 px-4">
        <h2 class="text-lg">Basic Info</h2>
        <h3 class="text-[var(--tui-text-secondary)]">visible to others so they can reach you easily</h3>
      </div>
      <!-- Profile Image -->
      <a href="/profile/personal-info/avatar" class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)] max-w-60">Profile Picture</div>
          <div class="flex lg:flex-1 space-x-1">A profile picture helps personalize your account</div>
        </div>
        <div class="relative rounded-full">
            <tui-avatar [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async"  size="xl" /> 
            <div class="absolute top-0 w-full h-full flex justify-center items-center text-white bg-black/20 rounded-full">
              <tui-icon  icon="@tui.pencil" size="m" />
            </div>            
        </div>
      </a>
      <!-- Display name --> 
      <a href="/profile/personal-info/display-name" class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t rounded-b-lg border-[var(--tui-background-neutral-1-hover)]">
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)] max-w-60">Display Name</div>
          <div class="text-base flex lg:flex-1 space-x-1 items-center">John Martin</div>
        </div>
        <div class="w-24 text-right"><tui-icon icon="@tui.chevron-right" /></div>        
      </a>                 
    </div> 
    
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg border border-[var(--tui-background-neutral-1-hover)]">
      <div class="py-3 px-4">
        <h2 class="text-lg">General preferences for the web</h2>
        <h3 class="text-[var(--tui-text-secondary)]">Manage settings for eBizBase products and services</h3>
      </div>
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.blend" />
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)]">Color Mode</div>
          <div class="flex lg:flex-1 space-x-1">
            <span>Monochrome</span>
          </div>
        </div>
        <tui-icon icon="@tui.chevron-right" />
      </div>
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t rounded-b-lg border-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.languages" />
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
        <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)]">Language</div>
        <div class="flex lg:flex-1 space-x-1 items-center">English</div>
        </div>
        <tui-icon icon="@tui.chevron-right" />
      </div>                      
    </div>

    <!-- Others -->
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg border border-[var(--tui-background-neutral-1-hover)]">
      <div class="pt-3 pb-5 px-4">
        <h2 class="text-lg font-medium">Looking for something else?</h2>
      </div>               
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.circle-help" />
        <div class="text-base lg:flex-1">View help options</div>      
        <tui-icon icon="@tui.chevron-right" />
      </div>      
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t border-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.message-square-warning" />
        <div class="text-base lg:flex-1">Send feedback</div>
        <tui-icon icon="@tui.chevron-right" />
      </div> 
      <div class="pb-4"></div>                     
    </div>
  </div>
  `,
})
export class PersonalInfoComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {
    this.layoutService.info = {
      title: 'eBizBase Account',
      size: 'm',
    };
  }

  ngOnInit(): void {}
}
