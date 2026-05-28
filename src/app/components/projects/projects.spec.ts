import { TestBed } from '@angular/core/testing';
import { Projects } from './projects';

describe('Projects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();
  });

  it('should show featured projects first with expand button', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');

    expect(cards.length).toBe(3);
    expect(compiled.textContent).toContain('Ver mais projetos');
  });

  it('should expand to show all projects when clicking show more', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.show-more button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    const cards = compiled.querySelectorAll('.project-card');
    expect(cards.length).toBe(17);
    expect(compiled.textContent).toContain('Ver menos projetos');
  });

  it('should hide demo action when demoUrl is null', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const actions = compiled.querySelectorAll('.project-card .actions');

    actions.forEach((action) => {
      expect(action.textContent).not.toContain('Demo');
    });
  });
});
