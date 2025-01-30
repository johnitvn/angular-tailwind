import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  template: `<div>Users</div>`,
  imports: [],
})
export class UsersComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {}

  ngOnInit(): void {
    this.layoutService.pageInformation = {
      title: 'Users listing',     
      actions: [
        {
          title: 'Create',
          click: () => {
            this.router.navigate(['users','create']);
          },
        },
      ],
    };
  }
}
