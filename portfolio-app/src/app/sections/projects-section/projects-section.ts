import { Component } from '@angular/core';

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
  readonly covers: Cover[] = [
    { src: 'assets/img/portfolio/join_cover.webp', name: 'Join360' },
    { src: 'assets/img/portfolio/sharkie_cover.webp', name: 'Sharkie' },
  ];
}
