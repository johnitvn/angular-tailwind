import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarService } from '../../services/menu.service';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-page-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TuiIcon],
  host: {
    class: 'py-4 flex justify-between',
  },
  template: `  
    <div class="inline-block">
      <div class="space-x-1 text-xs font-medium text-muted-foreground" *ngIf="layoutService.pageInformation?.previous">        
        <a href="{{layoutService.pageInformation?.previous?.url}}" class="hover:text-primary flex items-center">
          <tui-icon class="!text-sm" icon="@tui.chevron-left" />
          <span>{{layoutService.pageInformation?.previous?.title}}</span>
        </a>
      </div>
      <h3 class="text-lg font-semibold text-foreground">{{layoutService.pageInformation?.title}}</h3>
    </div>
    <div class="inline-flex gap-3" *ngIf="layoutService.pageInformation?.actions">
        <button
          *ngFor="let action of layoutService.pageInformation?.actions"
          (click)="action.click && action.click()"
          class="flex-none rounded-md bg-muted px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
          {{ action.title }}
        </button>
      </div>
  `,
})
export class PageTitleComponent {
  constructor(public layoutService: SidebarService) {}
}
