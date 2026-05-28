import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();
  });

  it('should render profile image with eager loading by default', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();

    expect(fixture.componentInstance['profileImage']).toBe('assets/img/profile.jpg');

    const compiled = fixture.nativeElement as HTMLElement;
    const image = compiled.querySelector('.hero-image img');

    expect(image?.getAttribute('src')).toBe('assets/img/profile.jpg');
    expect(image?.getAttribute('loading')).toBe('eager');
    expect(image?.getAttribute('alt')).toBe('William dos Santos Machado');
  });

  it('should show WM fallback when image fails to load', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const image = compiled.querySelector('.hero-image img');
    image?.dispatchEvent(new Event('error'));
    fixture.detectChanges();

    expect(compiled.querySelector('.hero-image img')).toBeNull();
    expect(compiled.querySelector('.profile-fallback')?.textContent?.trim()).toBe('WM');
  });
});
