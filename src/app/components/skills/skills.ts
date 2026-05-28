import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private readonly portfolioData = inject(PortfolioDataService);
  readonly categories = this.portfolioData.skillCategories;
}
