import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  private readonly portfolioData = inject(PortfolioDataService);
  readonly experiences = this.portfolioData.experiences;
}
