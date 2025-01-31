import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiTextfield } from '@taiga-ui/core';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-personal-information',
  imports: [TuiTextfield],
  template: `<div class="flex flex-col gap-8 max-w-6xl">
    <tui-textfield>
        <label tuiLabel>First name</label>
        <input tuiTextfield />
    </tui-textfield>
    <tui-textfield>
        <label tuiLabel>Last name</label>
        <input tuiTextfield />
    </tui-textfield>

    <tui-textfield>
        <label tuiLabel>Phone</label>
        <input tuiTextfield />
    </tui-textfield>

    <tui-textfield>
        <label tuiLabel>Birth Day</label>
        <input tuiTextfield />
    </tui-textfield>

    <tui-textfield>
        <label tuiLabel>Language</label>
        <input tuiTextfield />
    </tui-textfield>

  </div>`,
})
export class PersonalInformationComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {}

  ngOnInit(): void {
    this.layoutService.pageInformation = {
      title: 'Personal Information',           
    };
  }
}
