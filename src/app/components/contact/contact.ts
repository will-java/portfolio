import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly contactLinks = this.portfolioData.contactLinks;

  formData = {
    nome: '',
    email: '',
    mensagem: '',
  };

  submitted = false;

  submitForm(): void {
    this.submitted = true;
    console.log('Contato recebido (frontend):', this.formData);
    this.formData = { nome: '', email: '', mensagem: '' };
  }
}
