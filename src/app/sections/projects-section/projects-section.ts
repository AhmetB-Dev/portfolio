import { Component, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().projects);
  readonly activeProjectId = signal<ProjectId | null>(null);

  private readonly baseProjects: ProjectBase[] = [
    {
      id: 'join',
      name: 'Join',
      technologies: 'HTML | CSS | JavaScript | Firebase',
      src: 'assets/img/portfolio/join_cover.webp',
      liveUrl: '/projects/join/',
      githubUrl: 'https://github.com/AhmetB-Dev/Join',
    },
    {
      id: 'pollApp',
      name: 'PollApp',
      technologies: 'Angular | TypeScript | SCSS | Supabase',
      src: 'assets/img/portfolio/pollApp_cover.webp',
      liveUrl: '/projects/poll-app/',
      githubUrl: 'https://github.com/AhmetB-Dev/poll-app',
    },
    {
      id: 'sharkie',
      name: 'Sharkie',
      technologies: 'HTML | CSS | JavaScript',
      src: 'assets/img/portfolio/sharkie_cover.webp',
      liveUrl: '/projects/sharkie/',
      githubUrl: 'https://github.com/AhmetB-Dev/Sharkie',
    },
  ];


  /**
   * Opens a project overlay on touch devices before its links become clickable.
   */
  activateProject(projectId: ProjectId, event: MouseEvent): void {
    if (!this.usesTapInteraction() || this.activeProjectId() === projectId) {
      return;
    }

    event.preventDefault();
    this.activeProjectId.set(projectId);
  }

  /** Returns whether the device primarily uses touch or has no hover support. */
  private usesTapInteraction(): boolean {
    return window.matchMedia('(hover: none), (pointer: coarse)').matches;
  }

  readonly projects = computed<ProjectView[]>(() => {
    const translatedItems = this.text().items;

    return this.baseProjects.map((project) => ({
      ...project,
      description: translatedItems[project.id].description,
    }));
  });
}
