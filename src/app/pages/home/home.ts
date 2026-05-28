import { AfterViewInit, Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Certifications } from '../../components/certifications/certifications';
import { Contact } from '../../components/contact/contact';
import { Experience } from '../../components/experience/experience';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';
import { Navbar } from '../../components/navbar/navbar';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About, Experience, Skills, Projects, Certifications, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
  }
}
