import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiFallbackSrcPipe, TuiIcon, TuiLink, TuiTextfield } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-name',
  imports: [CommonModule, TuiTextfield, TuiAvatar, TuiCell, TuiLink, TuiIcon, TuiFallbackSrcPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `   
  `,
})
export class NameComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {
    this.layoutService.pageInformation = {
      title: 'Name',
      pageTitle: 'Name',
      previous: {
        url: '/profile',
        title: 'Home'
      }
    };
  }

  ngOnInit(): void {}
}
