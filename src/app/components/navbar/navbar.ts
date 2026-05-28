import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, ThemeToggle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = false;
  isScrolled = false;

  readonly navItems: NavItem[] = [
    { label: 'Sobre', href: '#about' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Certificações', href: '#certifications' },
    { label: 'Contato', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 18;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
