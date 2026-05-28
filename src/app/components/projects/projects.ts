import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly portfolioData = inject(PortfolioDataService);
  private readonly defaultProjectImage = 'https://placehold.co/640x360/1e293b/e2e8f0?text=Projeto';

  readonly projects = this.portfolioData.projects;
  protected readonly initialProjectsCount = 6;
  protected showAllProjects = false;

  protected get visibleProjects() {
    if (this.showAllProjects) {
      return this.projects;
    }

    const featuredProjects = this.projects.filter((project) => project.featured);
    return featuredProjects.length ? featuredProjects : this.projects.slice(0, this.initialProjectsCount);
  }

  protected toggleProjectsVisibility(): void {
    this.showAllProjects = !this.showAllProjects;
  }

  protected getProjectImage(projectImageUrl?: string): string {
    return projectImageUrl ?? this.defaultProjectImage;
  }
}
