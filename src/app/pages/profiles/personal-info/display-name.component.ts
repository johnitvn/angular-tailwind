import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTextfield } from '@taiga-ui/core';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-display-name',
  imports: [CommonModule, TuiTextfield],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `   
  `,
})
export class DisplayNameComponent {
  constructor(private layoutService: LayoutService) {
    this.layoutService.info = {
      title: 'Display Name',
      heading: 'Display Name',
      previous: {
        url: 'profile/personal-info',
        title: 'Personal Info'
      }
    };
  }
}
