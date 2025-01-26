import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../layout/services/menu.service';

@Component({
    selector: 'app-create-user',
    template: `<div>Create user</div>`,
    imports: []
})
export class CreateUserComponent implements OnInit {
  constructor(private layoutService: SidebarService) {}

  ngOnInit(): void {
    this.layoutService.pageInformation = {
      title: 'Create new user',
      previous: {
        title: 'Users',
        url: '/users'
      },     
    }
  }
}
