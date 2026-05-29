import { Injectable } from '@angular/core';
import { Certificate } from '../models/certificate.model';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';

interface SocialLink {
  label: string;
  url: string;
  svgPath?: string;
  hoverColor?: string;
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
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/williamdsmachado/',
      svgPath:
        'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      hoverColor: '#0A66C2',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/will-java',
      svgPath:
        'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
      hoverColor: '#6e7681',
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/@universodigitalti',
      svgPath:
        'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      hoverColor: '#FF0000',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/williamdsmachado/',
      svgPath:
        'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      hoverColor: '#E1306C',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/william.machado.9889261/',
      svgPath:
        'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
      hoverColor: '#1877F2',
    },
    {
      label: 'WhatsApp',
      url: 'https://wa.me/5534998890415?text=Ol%C3%A1!%20tudo%20bem?',
      svgPath:
        'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
      hoverColor: '#25D366',
    },
  ];

  private createGitHubPreviewUrl(repository: string): string {
    return `https://opengraph.githubassets.com/1/${repository}`;
  }
}
