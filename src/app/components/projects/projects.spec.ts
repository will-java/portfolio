import { TestBed } from '@angular/core/testing';
import { Projects } from './projects';

describe('Projects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();
  });

  it('should show only featured projects with expand button when not expanded', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');
    const expectedFeaturedCount = fixture.componentInstance.projects.filter((project) => project.featured).length;

    expect(cards.length).toBe(expectedFeaturedCount);
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
    expect(cards.length).toBe(fixture.componentInstance.projects.length);
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

  it('should show demo action when a project has demoUrl', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.componentInstance.projects[0].demoUrl = 'https://example.com/demo';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const firstActions = compiled.querySelector('.project-card .actions');

    expect(firstActions?.textContent).toContain('Demo');
  });
});
