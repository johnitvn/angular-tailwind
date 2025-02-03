import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIf, TuiIcon, TuiButton],
  host: {
    class: 'pb-4 flex justify-between',
  },
  template: `  
    <div class="inline-block" >
      <div class="space-x-1 text-xs font-medium" *ngIf="layoutService.info?.previous">        
        <a routerLink="{{layoutService.info?.previous?.url}}" class="flex items-center">
          <tui-icon class="!text-sm" icon="@tui.chevron-left" />
          <span>{{layoutService.info?.previous?.title}}</span>
        </a>
      </div>
      <h3 class="text-lg font-semibold">{{layoutService.info?.heading}}</h3>
    </div>
    <div class="inline-flex gap-3" *ngIf="layoutService.info?.actions">
        <button
          *ngFor="let action of layoutService.info?.actions"
          tuiButton size="m" [iconStart]="action.icon" (click)="action.click && action.click()">
          {{ action.title }}
        </button>
      </div>
  `,
})
export class PageTitleComponent {
  constructor(public layoutService: LayoutService) {}
}
