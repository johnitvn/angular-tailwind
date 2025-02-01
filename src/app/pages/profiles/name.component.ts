import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiTextfield } from '@taiga-ui/core';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-name',
  imports: [CommonModule, TuiTextfield],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `   
  `,
})
export class NameComponent {
  constructor(private layoutService: LayoutService) {
    this.layoutService.pageInformation = {
      title: 'Name',
      pageTitle: 'Name',
      previous: {
        url: '/profile',
        title: 'Home'
      }
    };
  }
}
