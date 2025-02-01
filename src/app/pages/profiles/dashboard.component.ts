import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiFallbackSrcPipe, TuiIcon, TuiLink, TuiTextfield } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TuiTextfield, TuiAvatar, TuiCell, TuiLink, TuiIcon, TuiFallbackSrcPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` 
  

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">

    <div class="flex flex-col items-center lg:col-span-4">
      <tui-avatar [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async"  size="xxl" /> 
      <div class="text-3xl mt-4">Welcome John Doe!</div>
      <div class="text-center mt-4">Manage your info, privacy, and security to make Google work better for you.</div>
    </div> 
    

    <!-- Personal info options -->
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg lg:col-span-2 border border-[var(--tui-background-neutral-1-hover)]">
      <div class="py-3 px-4">
        <h2 class="text-lg">Personal information</h2>
        <h3 class="text-[var(--tui-text-secondary)]">Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.</h3>
      </div>
      <!-- Profile Image -->
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)] max-w-60">Profile Picture</div>
          <div class="flex lg:flex-1 space-x-1">A profile picture helps personalize your account</div>
        </div>
        <tui-avatar class="w-24" [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async"  size="xl" /> 
      </div>
      <!-- Name -->
      <a href="/profile/name" class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t border-[var(--tui-background-neutral-1-hover)]">
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)]  max-w-60">Name</div>
          <div class="text-base flex lg:flex-1 space-x-1 items-center">John Doe</div>
        </div>
        <div class="w-24 text-right"><tui-icon icon="@tui.chevron-right" /></div>        
      </a>         
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t  border-[var(--tui-background-neutral-1-hover)]">
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)]  max-w-60">Birthday</div>
          <div class="text-base flex lg:flex-1 space-x-1 items-center">February 16, 1993</div>
        </div>
        <div class="w-24 text-right"><tui-icon icon="@tui.chevron-right" /></div>        
      </div>      
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t rounded-b-lg border-[var(--tui-background-neutral-1-hover)]">
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="font-medium lg:flex-1 text-[var(--tui-text-secondary)] max-w-60">Gender</div>
          <div class="text-base flex lg:flex-1 space-x-1 items-center">Male</div>
        </div>
        <div class="w-24 text-right"><tui-icon icon="@tui.chevron-right" /></div>        
      </div>                 
    </div>

    <!-- Sign In Options -->
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg lg:col-span-2 border border-[var(--tui-background-neutral-1-hover)]">
      <div class="py-3 px-4">
        <h2 class="text-lg">How you sign in to eBizBase</h2>
        <h3 class="text-[var(--tui-text-secondary)]">Make sure you can always access your Google Account by keeping this information up to date</h3>
      </div>
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.rectangle-ellipsis" />
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="text-base lg:flex-1">Password</div>
          <div class="flex lg:flex-1 space-x-1">
            <span>Last changed Jan 31, 2023</span>
          </div>
        </div>
        <tui-icon icon="@tui.chevron-right" />
      </div>
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t rounded-b-lg border-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.shield-plus" />
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="text-base lg:flex-1">2-Step Verification</div>
          <div class="flex lg:flex-1 space-x-1 items-center">
            <tui-icon icon="@tui.circle-check" class="text-base lg:text-lg"  [style.color]="'var(--tui-status-positive)'"/>
            <span>On since Aug 19, 2015</span>
          </div>
        </div>
        <tui-icon icon="@tui.chevron-right" />
      </div>                      
    </div>


    <!-- Devices Options -->
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg border border-[var(--tui-background-neutral-1-hover)]">
      <div class="py-3 px-4">
        <h2 class="text-lg">Your devices</h2>
        <h3 class="text-[var(--tui-text-secondary)]">Where you're signed in?</h3>
      </div>
      <div tuiCell="l">
        <tui-avatar appearance="primary" src="@tui.star" />
        <div tuiTitle>
            Device Name
            <div tuiSubtitle>127.0.0.1</div>
        </div>
      </div>
      <div tuiCell="l">
        <tui-avatar appearance="primary" src="@tui.star" />
        <div tuiTitle>
            Device Name
            <div tuiSubtitle>127.0.0.1</div>
        </div>
      </div>
      <div class="py-3 px-4 text-[var(--tui-text-tertiary)]">
        You're signed in on more devices
      </div>
      <div class="border-t py-3 px-4 border-[var(--tui-background-neutral-1-hover)]">
        <a tuiLink href="#">Manager all sessions</a>
      </div>         
    </div>


     <!-- Recent Security Activity -->
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg justify-between border border-[var(--tui-background-neutral-1-hover)]">
      <div class="py-3 px-4">
        <h2 class="text-lg">Recent Security Activity</h2>
      </div>
      <div class="flex-1 flex flex-col">
        <div tuiCell="l">
          <div tuiTitle>
              New SignIn on Windows
              <div tuiSubtitle>January 25, 8:31 PM</div>
          </div>
        </div>
        <div tuiCell="l">
          <div tuiTitle>
              New SignIn on Windows
              <div tuiSubtitle>January 25, 8:31 PM</div>
          </div>
        </div>
        <div tuiCell="l">
          <div tuiTitle>
              New SignIn on Windows
              <div tuiSubtitle>January 25, 8:31 PM</div>
          </div>
        </div>
      </div>
      <div class="border-t py-3 px-4 border-[var(--tui-background-neutral-1-hover)]">
        <a tuiLink href="#">Review security activity</a>
      </div>      
    </div>

    <!-- General preferences for the web -->
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
      <div class="py-3 px-4">
        <h2 class="text-lg">Looking for something else?</h2>
      </div>
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.mail" />
        <div class="text-base lg:flex-1">Manager email preferance</div>      
        <tui-icon icon="@tui.chevron-right" />
      </div>
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t rounded-b-lg border-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.message-square-warning" />
        <div class="text-base lg:flex-1">Send feedback</div>
        <tui-icon icon="@tui.chevron-right" />
      </div>   
      <div class="flex p-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t rounded-b-lg border-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.message-square-warning" />
        <div class="text-base lg:flex-1">Join early access program</div>
        <tui-icon icon="@tui.chevron-right" />
      </div>                       
    </div>
    
  </div>
  `,
})
export class DashboardComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {
    this.layoutService.pageInformation = {
      title: 'eBizBase Account',
      size: 'xxl'
    };
  }

  ngOnInit(): void {}
}
