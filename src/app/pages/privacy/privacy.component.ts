import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { TuiAvatar, TuiSwitch } from '@taiga-ui/kit';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';
import { PageHeadingComponent } from '../../components/page-heading/page-heading.component';

@Component({
  selector: 'app-privacy',
  imports: [CommonModule, TuiTextfield, TuiAvatar, TuiIcon, TuiSwitch, PageHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` 
  <app-page-heading title="Privacy" subtitle="Key privacy options to help you choose the data saved in your accoun and more" />   


  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

  
     <!-- Email preferances -->
    <div class="flex flex-col bg-[var(--tui-background-base)] lg:col-span-2 rounded-lg border border-[var(--tui-background-neutral-1-hover)] [&>:not]">
      <div class="pt-3 pb-5 px-4">
        <h2 class="text-lg font-medium">Email preferances</h2>
      </div>
      <div class="p-4 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <div class="flex w-full lg:items-center">
          <div class="text-base lg:flex-1">Product updates</div>
          <input tuiSwitch type="checkbox" [showIcons]="true" />      
        </div>
        <div class="text-sm text-[var(--tui-text-secondary)]">Recommendations & tips that you get if you sign into your Google Account on a new device</div>
      </div>      
      <div class="p-4 items-center hover:bg-[var(--tui-background-neutral-1-hover)]">
        <div class="flex w-full lg:items-center">
          <div class="text-base lg:flex-1">Promotion</div>
          <input tuiSwitch type="checkbox" [showIcons]="true" />      
        </div>
        <div class="text-sm text-[var(--tui-text-secondary)]">Promotional programs, promote products, services</div>
      </div>                   
    </div>

    <!-- Choose what others see -->
    <div class="flex flex-col bg-[var(--tui-background-base)] rounded-lg border border-[var(--tui-background-neutral-1-hover)]">
      <div class="pt-3 pb-5 px-4">
        <h2 class="text-lg font-medium">Choose what others see</h2>
      </div>        
      <div class="flex items-center gap-6 p-4 !rounded-none hover:bg-[var(--tui-background-neutral-1-hover)]">
        <tui-avatar appearance="primary" src="@tui.star" />
        <div tuiTitle>
            About Me
            <div tuiSubtitle>What personal info you make visible to others across Google services</div>
        </div>
        <tui-icon icon="@tui.chevron-right" />
      </div>    
      <div class="pb-4"></div>                     
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
export class PrivacyComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {
    this.layoutService.info = {
      title: 'Security',
      size: 'm',
    };
  }
  ngOnInit(): void {}
}
