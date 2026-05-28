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

  // substituir pelos projetos reais
  readonly projects = this.portfolioData.projects;
}
