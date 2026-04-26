import { Component, computed, inject } from '@angular/core';
import { Language } from '../../core/services/language';

type SkillIcon = {
  src: string;
  name: string;
};

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().skills);
  readonly skills: SkillIcon[] = [
    { src: 'assets/icon/skills/html.svg', name: 'HTML' },
    { src: 'assets/icon/skills/css.svg', name: 'CSS' },
    { src: 'assets/icon/skills/javScript.svg', name: 'JavaScript' },
    { src: 'assets/icon/skills/angular.svg', name: 'Angular' },
    { src: 'assets/icon/skills/typescript.svg', name: 'TypeScript' },
    { src: 'assets/icon/skills/firebase.svg', name: 'Firebase' },
    { src: 'assets/icon/skills/git.svg', name: 'Git' },
    { src: 'assets/icon/skills/material-design.svg', name: 'Material Design' },
    { src: 'assets/icon/skills/continually-learningBlue.svg', name: 'Continually learning' },
  ];
}
