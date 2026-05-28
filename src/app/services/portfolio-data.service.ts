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
      title: 'IAprimoraCV',
      description:
        'IA generativa usando AWS Bedrock e AWS Textract para analisar currículos e sugerir melhorias automaticamente. Frontend em Streamlit com upload do PDF e retorno de um currículo otimizado para recrutadores.',
      stack: ['Python', 'AWS Bedrock', 'AWS Textract', 'Streamlit', 'IA Generativa'],
      githubUrl: 'https://github.com/WilliamdsMachado/IAprimoraCV',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/IAprimoraCV'),
      demoUrl: null,
      featured: true,
    },
    {
      title: 'Docker Compose + DevOps + GCP',
      description:
        'Projeto em Python com utilização de Docker, Docker Compose e Google Cloud Platform (GCP) para práticas de DevOps e deploy em nuvem.',
      stack: ['Python', 'Docker', 'Docker Compose', 'GCP'],
      githubUrl: 'https://github.com/WilliamdsMachado/docker_compose_-devops_gcp',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/docker_compose_-devops_gcp'),
      demoUrl: null,
      featured: true,
    },
    {
      title: 'Quarkus + Docker + Java',
      description:
        'Estudo prático de microsserviços com Quarkus, Java e Docker, focado em performance e cloud-native development.',
      stack: ['Java', 'Quarkus', 'Docker'],
      githubUrl: 'https://github.com/WilliamdsMachado/Quarkus-docker-java',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/Quarkus-docker-java'),
      demoUrl: null,
      featured: true,
    },
    {
      title: 'Projeto IA',
      description: 'Projeto exploratório em Inteligência Artificial utilizando Jupyter Notebook.',
      stack: ['Python', 'Jupyter', 'IA'],
      githubUrl: 'https://github.com/WilliamdsMachado/Projeto-IA',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/Projeto-IA'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Análise e Tratamento de Dados',
      description:
        'Projeto de análise exploratória e tratamento de dados usando Jupyter Notebook, Pandas e bibliotecas de visualização.',
      stack: ['Python', 'Jupyter', 'Pandas', 'Data Science'],
      githubUrl: 'https://github.com/WilliamdsMachado/Analise_tratamento_dados',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/Analise_tratamento_dados'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Automação com Python',
      description:
        'Projeto de automação usando PyAutoGUI, Pandas e lógica Python para automatizar tarefas repetitivas.',
      stack: ['Python', 'PyAutoGUI', 'Pandas'],
      githubUrl: 'https://github.com/WilliamdsMachado/automacao_python',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/automacao_python'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Design Patterns',
      description:
        'Implementação prática de padrões de projeto (Design Patterns) em Java, demonstrando boas práticas de arquitetura de software.',
      stack: ['Java', 'Design Patterns', 'POO'],
      githubUrl: 'https://github.com/WilliamdsMachado/Design-Patterns',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/Design-Patterns'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Spring MVC',
      description: 'Projeto Java utilizando Spring MVC para desenvolvimento web com arquitetura model-view-controller.',
      stack: ['Java', 'Spring MVC', 'Spring Framework'],
      githubUrl: 'https://github.com/WilliamdsMachado/SpringMVC',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/SpringMVC'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Java Full Stack',
      description: 'Projeto Full Stack em Java, integrando backend e frontend em uma aplicação completa.',
      stack: ['Java', 'Full Stack'],
      githubUrl: 'https://github.com/WilliamdsMachado/JavaFullStack',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/JavaFullStack'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'JSP + Servlets + JDBC',
      description: 'Aplicação Java web utilizando JSP, Servlets e JDBC com SQL para persistência de dados.',
      stack: ['Java', 'JSP', 'Servlets', 'JDBC', 'SQL'],
      githubUrl: 'https://github.com/WilliamdsMachado/jsp',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/jsp'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Angular (AlgaWorks)',
      description: 'Projeto Angular desenvolvido durante o curso AlgaWorks, com componentes, serviços e boas práticas.',
      stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/WilliamdsMachado/Angular',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/Angular'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Angular 11',
      description: 'Projeto de estudo em Angular 11 com TypeScript.',
      stack: ['Angular', 'TypeScript'],
      githubUrl: 'https://github.com/WilliamdsMachado/angular11',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/angular11'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Figma Hotel Dev',
      description: 'Projeto de site para hotel utilizando design no Figma e implementação em HTML/CSS.',
      stack: ['HTML', 'CSS', 'Figma', 'Design'],
      githubUrl: 'https://github.com/WilliamdsMachado/figma-hotel-dev',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/figma-hotel-dev'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Rede Social para Devs (Social Dev)',
      description:
        'Projeto de rede social focada em desenvolvedores, com funcionalidades de interação e compartilhamento.',
      stack: ['JavaScript', 'Node.js'],
      githubUrl: 'https://github.com/WilliamdsMachado/rede-social-para-desenvolvedores-social-dev',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/rede-social-para-desenvolvedores-social-dev'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Node.js + Express',
      description: 'Exemplos práticos de desenvolvimento backend com Node.js e Express.',
      stack: ['Node.js', 'Express', 'JavaScript'],
      githubUrl: 'https://github.com/WilliamdsMachado/nodejs-express-exemplos',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/nodejs-express-exemplos'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Next.js + React',
      description: 'Exemplos práticos de desenvolvimento frontend com Next.js, React e ReactDOM.',
      stack: ['Next.js', 'React', 'JavaScript'],
      githubUrl: 'https://github.com/WilliamdsMachado/next-react-reactdom-exemplos',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/next-react-reactdom-exemplos'),
      demoUrl: null,
      featured: false,
    },
    {
      title: 'Python — Lógica de Programação',
      description: 'Treinamento de lógica de programação utilizando a linguagem Python.',
      stack: ['Python', 'Lógica'],
      githubUrl: 'https://github.com/WilliamdsMachado/Python-logica-programacao',
      imageUrl: this.createGitHubPreviewUrl('WilliamdsMachado/Python-logica-programacao'),
      demoUrl: null,
      featured: false,
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

  private createGitHubPreviewUrl(repository: string): string {
    return `https://opengraph.githubassets.com/1/${repository}`;
  }
}
