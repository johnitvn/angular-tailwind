import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-page-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TuiIcon, TuiButton],
  host: {
    class: 'py-4 flex justify-between',
  },
  template: `  
    <div class="inline-block">
      <div class="space-x-1 text-xs font-medium" *ngIf="layoutService.pageInformation?.previous">        
        <a href="{{layoutService.pageInformation?.previous?.url}}" class="flex items-center">
          <tui-icon class="!text-sm" icon="@tui.chevron-left" />
          <span>{{layoutService.pageInformation?.previous?.title}}</span>
        </a>
      </div>
      <h3 class="text-lg font-semibold">{{layoutService.pageInformation?.title}}</h3>
    </div>
    <div class="inline-flex gap-3" *ngIf="layoutService.pageInformation?.actions">
        <button
          *ngFor="let action of layoutService.pageInformation?.actions"
          tuiButton size="m" [iconStart]="action.icon??''" (click)="action.click && action.click()">
          {{ action.title }}
        </button>
      </div>
  `,
})
export class PageTitleComponent {
  constructor(public layoutService: LayoutService) {}
}
