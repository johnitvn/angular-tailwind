import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuService } from 'src/app/core/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    AngularSvgIconModule,
  ]
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: MenuService) { }

  ngOnInit(): void { }

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
