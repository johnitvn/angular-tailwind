import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { SidebarService } from 'src/app/modules/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, TuiButton, TuiIcon]
})
export class NavbarComponent implements OnInit {
  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void { }

  public toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  public toggleMobileSidebar() {
    this.sidebarService.toggleMobileSidebar();

  }
}
