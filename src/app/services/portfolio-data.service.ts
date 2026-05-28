import { Injectable } from '@angular/core';
import { Certificate } from '../models/certificate.model';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';

interface SocialLink {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  readonly experiences: Experience[] = [
    {
      company: 'Santander / Getnet',
      role: 'Desenvolvedor Full Stack',
      team: 'Equipe Integration Channels',
      description: 'Atuação no desenvolvimento de soluções corporativas com foco em integrações e escalabilidade.',
      stack: ['Java', 'Angular', 'Spring Boot', 'Integrações'],
    },
    {
      company: 'Caixa Econômica Federal — Open Finance',
      role: 'Desenvolvedor Full Stack',
      team: 'Squad box-openfinance',
      description:
        'Participação na aplicação iniciadora de pagamentos e integrações com API externa de cobrança (NSGD).',
      stack: ['Java', 'Spring Boot', 'Spring Batch', 'Quarkus'],
    },
    {
      company: 'Caixa Econômica Federal — Loterias',
      role: 'Desenvolvedor Full Stack',
      team: 'Squad slice-refatoração',
      description: 'Refatoração de sistema legado para arquitetura de microsserviços com Quarkus e Java 21.',
      stack: ['Java 21', 'Quarkus', 'Microsserviços'],
    },
    {
      company: 'Justiça Federal — TRF1',
      role: 'Analista de TI',
      description: 'Suporte e evolução de soluções internas, garantindo continuidade e qualidade dos serviços de TI.',
    },
    {
      company: 'Chevrolet',
      role: 'Operador de Processamento de Dados',
      description: 'Atuação em rotinas de processamento e confiabilidade de dados em ambiente corporativo.',
    },
    {
      company: 'Empreendedor',
      role: 'Prestação de serviços de tecnologia',
      description: 'Atendimento a demandas de clientes em manutenção, suporte e soluções digitais sob medida.',
    },
    {
      company: 'Professor',
      role: 'Início aos 18 anos, diplomado em Licenciatura em Computação (2017)',
      description: 'Experiência em ensino e formação técnica, fortalecendo comunicação e didática em tecnologia.',
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      category: 'Linguagens',
      items: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ],
    },
    {
      category: 'Frameworks/Bibliotecas',
      items: [
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        {
          name: 'Spring Boot',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        { name: 'Spring Batch' },
        { name: 'Quarkus' },
        {
          name: 'Hibernate',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
        },
        {
          name: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        },
      ],
    },
    {
      category: 'Banco de dados',
      items: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        {
          name: 'PostgreSQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
    },
    {
      category: 'Ferramentas',
      items: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        {
          name: 'VS Code',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        },
        { name: 'IntelliJ IDEA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
        { name: 'Eclipse', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
        { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        { name: 'Google Colab' },
        { name: 'PyCharm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg' },
      ],
    },
    {
      category: 'Outros',
      items: [
        { name: 'Inteligência Artificial' },
        { name: 'Machine Learning' },
        { name: 'Data Science' },
        { name: 'APIs' },
        { name: 'Microsserviços' },
        { name: 'Open Finance' },
        { name: 'Metodologias Ágeis' },
      ],
    },
  ];

  readonly projects: Project[] = [
    {
      title: 'Sistema de Pagamentos',
      description: 'Arquitetura orientada a serviços para processamento seguro de pagamentos e integrações.',
      stack: ['Java', 'Spring Boot', 'Quarkus'],
      imageUrl: 'https://placehold.co/640x360/1e293b/e2e8f0?text=Sistema+de+Pagamentos',
      githubUrl: 'https://github.com/will-java',
      demoUrl: '#',
    },
    {
      title: 'Portfólio Pessoal',
      description: 'Landing page responsiva em Angular com tema dark/light e foco em identidade profissional.',
      stack: ['Angular', 'SCSS', 'TypeScript'],
      imageUrl: 'https://placehold.co/640x360/1e293b/e2e8f0?text=Portfolio+Pessoal',
      githubUrl: 'https://github.com/will-java/portfolio',
      demoUrl: '#',
    },
    {
      title: 'Refatoração Legado → Microsserviços',
      description: 'Modernização de sistema legado para microsserviços com observabilidade e escalabilidade.',
      stack: ['Java 21', 'Quarkus'],
      imageUrl: 'https://placehold.co/640x360/1e293b/e2e8f0?text=Legado+para+Microservicos',
      githubUrl: 'https://github.com/will-java',
      demoUrl: '#',
    },
  ];

  readonly certificates: Certificate[] = [
    { title: 'Microsoft AI-900 (Azure AI Fundamentals)', institution: 'Microsoft', year: '—' },
    { title: 'Microsoft Cloud Skills Challenge', institution: 'Microsoft', year: '—' },
    { title: 'Microsoft AI Skills Challenge', institution: 'Microsoft', year: '—' },
    {
      title: 'Microsoft Security, Compliance, and Identity Fundamentals (SC-900)',
      institution: 'Microsoft',
      year: '—',
    },
    { title: 'Fundamentos do Microsoft Azure (AZ-900)', institution: 'Microsoft', year: '—' },
    { title: 'Data Science Santander Tech+ | Ada Tech', institution: 'Santander | Ada Tech', year: '—' },
    { title: 'Academia Java', institution: 'Academia Java', year: '—' },
    { title: 'AWS Dev-IA', institution: 'AWS', year: '—' },
    { title: 'Licenciatura em Computação (IFTM)', institution: 'IFTM', year: '—' },
    {
      title: 'Pós-graduação em Inteligência Artificial e Machine Learning',
      institution: 'Especialização',
      year: '—',
    },
  ];

  readonly contactLinks: SocialLink[] = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/williamdsmachado/' },
    { label: 'GitHub (perfil principal)', url: 'https://github.com/WilliamdsMachado' },
    { label: 'GitHub (este)', url: 'https://github.com/will-java' },
    { label: 'YouTube', url: 'https://www.youtube.com/@universodigitalti' },
    { label: 'Instagram', url: 'https://www.instagram.com/williamdsmachado/' },
    { label: 'Facebook', url: 'https://www.facebook.com/william.machado.9889261/' },
    { label: 'WhatsApp', url: 'https://wa.me/5534998890415?text=Ol%C3%A1!%20tudo%20bem?' },
  ];
}
