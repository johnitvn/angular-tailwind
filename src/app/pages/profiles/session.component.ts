import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiIcon, TuiLink, TuiTextfield } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-sessions',
  imports: [
    TuiTextfield, 
    TuiAvatar, 
    TuiCell,
    TuiLink,
    TuiIcon
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg lg:col-span-2 border border-[var(--tui-background-neutral-1-hover)]">
      <div class="py-3 px-4">
        <h2 class="text-lg">How you sign in to eBizBase</h2>
        <h3 class="text-[var(--tui-text-secondary)]">Make sure you can always access your Google Account by keeping this information up to date</h3>
      </div>
      <div class="flex pl-3 py-3 lg:py-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <tui-icon icon="@tui.rectangle-ellipsis" />
        <div class="flex flex-col flex-1 lg:flex-row w-full lg:items-center">
          <div class="text-base lg:flex-1">Password</div>
          <div class="flex lg:flex-1 space-x-1">
            <span>Last changed Jan 31, 2023</span>
          </div>
        </div>
        <tui-icon icon="@tui.chevron-right" />
      </div>
      <div class="flex pl-3 py-3 lg:py-4 space-x-2 items-center hover:bg-[var(--tui-background-neutral-1-hover)] border-t rounded-b-lg border-[var(--tui-background-neutral-1-hover)]">
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
  </div>
  `,
})
export class SessionComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {}

  ngOnInit(): void {
    this.layoutService.pageInformation = {
      title: 'Sessions',           
    };
  }
}
