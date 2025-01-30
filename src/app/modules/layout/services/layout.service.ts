import { Injectable, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MenuItem, SubMenuItem } from '../models/menu.model';
import { PageInformation } from '../models/page-information.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService implements OnDestroy {
  private _mobileSidebar = signal(false);
  private _information = signal<PageInformation | null>(null);
  private _pagesMenu = signal<MenuItem[]>([]);
  private _subscription = new Subscription();

  constructor(private router: Router) {
    let sub = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.expandBaseOnActiveRoute();
      this.scrollMainContentToTop();
      this._information.set(null);
    });
    this._subscription.add(sub);
  }

  get pagesMenu() {
    return this._pagesMenu();
  }

  set pagesMenu(menus: MenuItem[]) {
    this._pagesMenu.set(menus);
  }

  set pageInformation(info: PageInformation | null) {
    this._information.set(info);
  }

  get pageInformation() {
    return this._information();
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


  public toggleSubMenu(submenu: SubMenuItem) {
    submenu.expanded = !submenu.expanded;
  }

  private scrollMainContentToTop() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }

  private expandBaseOnActiveRoute() {
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
