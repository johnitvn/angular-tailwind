import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
    selector: 'app-create-user',
    template: `<div>Create user</div>`,
    imports: []
})
export class CreateUserComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.pageInformation = {
      title: 'Create new user',
      pageTitle: 'Create new user',
      previous: {
        title: 'Users',
        url: '/users'
      },       
    }
  }
}
