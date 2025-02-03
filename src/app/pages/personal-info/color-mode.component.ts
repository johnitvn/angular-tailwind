import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTextfield } from '@taiga-ui/core';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-color-mode',
  imports: [CommonModule, TuiTextfield],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `   
  `,
})
export class ColorModeComponent {
  constructor(private layoutService: LayoutService) {
    this.layoutService.info = {
      title: 'Color Mode',
      heading: 'Color Mode',
      previous: {
        url: './',
        title: 'Personal Info'
      }
    };
  }
}
