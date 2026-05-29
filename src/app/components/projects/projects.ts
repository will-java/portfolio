import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const TECH_ICONS: Record<string, string> = {
  Angular: `${DEVICON_BASE}/angular/angular-original.svg`,
  Java: `${DEVICON_BASE}/java/java-original.svg`,
  'Spring Boot': `${DEVICON_BASE}/spring/spring-original.svg`,
  'Spring MVC': `${DEVICON_BASE}/spring/spring-original.svg`,
  'Spring Framework': `${DEVICON_BASE}/spring/spring-original.svg`,
  'Spring Batch': `${DEVICON_BASE}/spring/spring-original.svg`,
  Quarkus: `${DEVICON_BASE}/quarkus/quarkus-original.svg`,
  Python: `${DEVICON_BASE}/python/python-original.svg`,
  'Node.js': `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  Docker: `${DEVICON_BASE}/docker/docker-original.svg`,
  'Docker Compose': `${DEVICON_BASE}/docker/docker-original.svg`,
  JavaScript: `${DEVICON_BASE}/javascript/javascript-original.svg`,
  TypeScript: `${DEVICON_BASE}/typescript/typescript-original.svg`,
  HTML: `${DEVICON_BASE}/html5/html5-original.svg`,
  CSS: `${DEVICON_BASE}/css3/css3-original.svg`,
  React: `${DEVICON_BASE}/react/react-original.svg`,
  'Next.js': `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  Jupyter: `${DEVICON_BASE}/jupyter/jupyter-original.svg`,
  Pandas: `${DEVICON_BASE}/pandas/pandas-original.svg`,
  MySQL: `${DEVICON_BASE}/mysql/mysql-original.svg`,
  PostgreSQL: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  MongoDB: `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  Git: `${DEVICON_BASE}/git/git-original.svg`,
  GitHub: `${DEVICON_BASE}/github/github-original.svg`,
  Express: `${DEVICON_BASE}/express/express-original.svg`,
  Bootstrap: `${DEVICON_BASE}/bootstrap/bootstrap-original.svg`,
  GCP: `${DEVICON_BASE}/googlecloud/googlecloud-original.svg`,
  SQL: `${DEVICON_BASE}/mysql/mysql-original.svg`,
  JDBC: `${DEVICON_BASE}/java/java-original.svg`,
  JSP: `${DEVICON_BASE}/java/java-original.svg`,
  Servlets: `${DEVICON_BASE}/java/java-original.svg`,
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly projects = this.portfolioData.projects;
  protected readonly initialProjectsCount = 6;
  protected showAllProjects = false;

  protected get displayedProjects() {
    if (this.showAllProjects) {
      return this.projects;
    }

    return this.getCollapsedProjects();
  }

  protected toggleProjectsVisibility(): void {
    this.showAllProjects = !this.showAllProjects;
  }

  protected get shouldShowToggleButton(): boolean {
    return this.showAllProjects || this.getCollapsedProjects().length < this.projects.length;
  }

  protected getProjectTechIcons(stack: string[]): Array<{ name: string; url: string }> {
    const seen = new Set<string>();
    const result: Array<{ name: string; url: string }> = [];
    for (const tech of stack) {
      const url = TECH_ICONS[tech];
      if (url && !seen.has(url)) {
        seen.add(url);
        result.push({ name: tech, url });
        if (result.length === 5) break;
      }
    }
    return result;
  }

  private getCollapsedProjects() {
    const featuredProjects = this.projects.filter((project) => project.featured);
    return featuredProjects.length ? featuredProjects : this.projects.slice(0, this.initialProjectsCount);
  }
}
