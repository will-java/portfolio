import { Injectable, signal } from '@angular/core';

export type PortfolioTheme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'portfolio-theme';
  readonly currentTheme = signal<PortfolioTheme>('dark');

  constructor() {
    this.initializeTheme();
  }

  toggleTheme(): void {
    const nextTheme: PortfolioTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey) as PortfolioTheme | null;
    const theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
    this.applyTheme(theme);
  }

  private applyTheme(theme: PortfolioTheme): void {
    const html = document.documentElement;
    const body = document.body;

    html.classList.remove('dark', 'light');
    body.classList.remove('dark', 'light');

    html.classList.add(theme);
    body.classList.add(theme);

    this.currentTheme.set(theme);
    localStorage.setItem(this.storageKey, theme);
  }
}
