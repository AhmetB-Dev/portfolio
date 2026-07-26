import { Component, computed, inject } from '@angular/core';
import { Language } from '../../core/services/language';

type ProjectId = 'join' | 'sharkie' | 'pollApp';

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
      technologies: 'HTML | CSS | JavaScript | Firebase',
      src: 'assets/img/portfolio/join_cover.webp',
      liveUrl: 'https://example.com/join',
      githubUrl: 'https://github.com/AhmetB-Dev/Join',
    },
    {
      id: 'pollApp',
      name: 'PollApp',
      technologies: 'Angular | TypeScript | SCSS | Supabase',
      src: 'assets/img/portfolio/pollApp_cover.webp',
      liveUrl: 'https://example.com/app',
      githubUrl: 'https://github.com/AhmetB-Dev/poll-app',
    },
    {
      id: 'sharkie',
      name: 'Sharkie',
      technologies: 'HTML | CSS | JavaScript',
      src: 'assets/img/portfolio/sharkie_cover.webp',
      liveUrl: 'https://example.com/sharkie',
      githubUrl: 'https://github.com/AhmetB-Dev/Sharkie',
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
