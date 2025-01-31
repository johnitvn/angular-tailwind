import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-sessions',
  imports: [
    TuiTextfield, 
    TuiAvatar, 
    TuiCell
  ],
  template: `<div class="flex flex-col max-w-2xl">
    <div tuiCell="l">
      <tui-avatar appearance="primary" src="@tui.star" />
      <div tuiTitle>
          Device Name
          <div tuiSubtitle>127.0.0.1</div>
      </div>
      <button>Delete</button>
    </div>
    <div tuiCell="l">
      <tui-avatar appearance="primary" src="@tui.star" />
      <div tuiTitle>
          Device Name
          <div tuiSubtitle>127.0.0.1</div>
      </div>
      <button>Delete</button>
    </div>
    <div tuiCell="l">
      <tui-avatar appearance="primary" src="@tui.star" />
      <div tuiTitle>
          Device Name
          <div tuiSubtitle>127.0.0.1</div>
      </div>
      <button>Delete</button>
    </div>
  </div>`,
})
export class SessionComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {}

  ngOnInit(): void {
    this.layoutService.pageInformation = {
      title: 'Sessions',           
    };
  }
}
