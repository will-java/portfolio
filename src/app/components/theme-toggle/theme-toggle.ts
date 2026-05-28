import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  private readonly themeService = inject(ThemeService);

  readonly currentTheme = this.themeService.currentTheme;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
