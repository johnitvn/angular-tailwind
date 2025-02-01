import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

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
      pageTitle: 'Users listing',
      previous: {
        title: 'Home',
        url: '/'
      },      
      actions: [
        {
          title: 'Create',
          icon: '@tui.plus',
          click: () => {
            this.router.navigate(['users','create']);
          },
        },
      ],
    };
  }
}
