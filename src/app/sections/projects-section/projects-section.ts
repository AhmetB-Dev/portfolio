import { Component, computed, inject } from '@angular/core';
import { Language } from '../../core/services/language';

type ProjectId = 'join' | 'sharkie' | 'memory' | 'app';

type ProjectBase = {
  id: ProjectId;
  name: string;
  technologies: string;
  src: string;
  liveUrl: string;
  githubUrl: string;
};

type ProjectView = ProjectBase & {
  description: string;
};

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().projects);

  private readonly baseProjects: ProjectBase[] = [
    {
      id: 'join',
      name: 'Join',
      technologies: 'HTML | CSS | javaScript | Firebase',
      src: 'assets/img/portfolio/join_cover.webp',
      liveUrl: 'https://example.com/join',
      githubUrl: 'https://github.com/example/join',
    },
    {
      id: 'sharkie',
      name: 'Sharkie',
      technologies: 'HTML | CSS | javaScript',
      src: 'assets/img/portfolio/sharkie_cover.webp',
      liveUrl: 'https://example.com/sharkie',
      githubUrl: 'https://github.com/example/sharkie',
    },
    {
      id: 'memory',
      name: 'Memory',
      technologies: 'Angular | TypeScript | SCSS | Firebase',
      src: 'assets/img/portfolio/sharkie_cover.webp',
      liveUrl: 'https://example.com/memory',
      githubUrl: 'https://github.com/example/memory',
    },
    {
      id: 'app',
      name: 'App',
      technologies: 'Angular | TypeScript | SCSS | Firebase',
      src: 'assets/img/portfolio/sharkie_cover.webp',
      liveUrl: 'https://example.com/app',
      githubUrl: 'https://github.com/example/app',
    },
  ];

  readonly projects = computed<ProjectView[]>(() => {
    const translatedItems = this.text().items;

    return this.baseProjects.map((project) => ({
      ...project,
      description: translatedItems[project.id].description,
    }));
  });
}
