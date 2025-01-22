import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/modules/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
  ]
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: SidebarService) { }

  ngOnInit(): void { }

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  public toggleMobileSidebar() {
    this.menuService.toggleMobileSidebar();

  }
}
