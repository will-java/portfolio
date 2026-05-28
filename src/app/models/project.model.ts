export interface Project {
  title: string;
  description: string;
  stack: string[];
  imageUrl?: string;
  githubUrl: string;
  demoUrl?: string | null;
  featured?: boolean;
}
