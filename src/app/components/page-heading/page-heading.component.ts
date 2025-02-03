import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col items-center pb-10',
  },
  template: `
    <div class="mt-4 text-3xl" *ngIf="title">{{ title }}</div>
    <div class="mt-4 text-center" *ngIf="subtitle">{{ subtitle }}</div>
  `,
})
export class PageHeadingComponent{
  @Input() title!: string;
  @Input() subtitle!: string;
}
