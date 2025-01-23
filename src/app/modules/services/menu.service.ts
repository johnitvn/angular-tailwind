import { Injectable, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuItem, SubMenuItem } from '../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService implements OnDestroy {
  private _showSidebar = signal(true);
  private _mobileSidebar = signal(false);
  private _pagesMenu = signal<MenuItem[]>([]);
  private _subscription = new Subscription();

  constructor(private router: Router) {  

    let sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        /** Expand menu base on active route */
        this._pagesMenu().forEach((menu) => {
          let activeGroup = false;
          menu.items.forEach((subMenu) => {
            const active = this.isActive(subMenu.route);
            subMenu.expanded = active;
            subMenu.active = active;
            if (active) {
              activeGroup = true;
              this.mobileSidebar = false;
            }
            if (subMenu.children) {
              this.expand(subMenu.children);
            }
          });
          menu.active = activeGroup;
        });
      }
    });
    this._subscription.add(sub);
  }

  get pagesMenu() {
    return this._pagesMenu();
  }

  set pagesMenu(menus: MenuItem[]) {
    this._pagesMenu.set(menus);
  }

  get showSideBar() {
    return this._showSidebar();
  }

  set showSideBar(value: boolean) {
    this._showSidebar.set(value);
  }

  public toggleSidebar() {
    this._showSidebar.set(!this._showSidebar());
  }


  get mobileSidebar() {
    return this._mobileSidebar();
  }

  set mobileSidebar(value: boolean) {
    this._mobileSidebar.set(value);
  }
 
  public toggleMobileSidebar() {
    this._mobileSidebar.set(!this._mobileSidebar());
  }
  
  public toggleMenu(menu: any) {
    this.showSideBar = true;
    menu.expanded = !menu.expanded;
  }

  public toggleSubMenu(submenu: SubMenuItem) {
    submenu.expanded = !submenu.expanded;
  }

  private expand(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = this.isActive(item.route);
      if (item.children) this.expand(item.children);
    });
  }

  private isActive(instruction: any): boolean {
    return this.router.isActive(this.router.createUrlTree([instruction]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
