import { Component, computed, inject } from '@angular/core';
import { Language } from '../../core/services/language';

type Cover = {
  src: string;
  name: string;
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
  readonly covers: Cover[] = [
    { src: 'assets/img/portfolio/join_cover.webp', name: 'Join360' },
    { src: 'assets/img/portfolio/sharkie_cover.webp', name: 'Sharkie' },
    { src: 'assets/img/portfolio/sharkie_cover.webp', name: 'Memory' },
    { src: 'assets/img/portfolio/sharkie_cover.webp', name: 'App' },
  ];
}
