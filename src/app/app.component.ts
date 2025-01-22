import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from './core/theme.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [NgClass, RouterOutlet]
})
export class AppComponent {
  title = 'Angular Tailwind';

  constructor(public themeService: ThemeService) {}
}
