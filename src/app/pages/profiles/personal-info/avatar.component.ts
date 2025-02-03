import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTextfield } from '@taiga-ui/core';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule, TuiTextfield],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ``,
})
export class AvatarComponent {
  constructor(private layoutService: LayoutService) {
    this.layoutService.info = {
      title: 'Avatar',
      heading: 'Avatar',
      previous: {
        url: 'profile/personal-info',
        title: 'Personal Info'
      }
    };
  }
}
