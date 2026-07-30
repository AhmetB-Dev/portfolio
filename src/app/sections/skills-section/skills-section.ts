import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { Language } from '../../core/services/language';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

type SkillIcon = {
  src: string;
  name: string;
  labelLines?: string[];
};

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().skills);
  readonly skills: SkillIcon[] = [
    { src: 'assets/icon/skills/html.svg', name: 'HTML' },
    { src: 'assets/icon/skills/css.svg', name: 'CSS' },
    { src: 'assets/icon/skills/javScript.svg', name: 'JavaScript' },
    { src: 'assets/icon/skills/typescript.svg', name: 'TypeScript' },
    { src: 'assets/icon/skills/angular.svg', name: 'Angular' },
    { src: 'assets/icon/skills/api.svg', name: 'Api' },
    { src: 'assets/icon/skills/firebase.svg', name: 'Firebase' },
    { src: 'assets/icon/skills/supabase.svg', name: 'Supabase' },
    { src: 'assets/icon/skills/git.svg', name: 'Git' },
    {
      src: 'assets/icon/skills/material-design.svg',
      name: 'Material Design',
      labelLines: ['Material', 'Design'],
    },
  ];
  readonly learningRevealDelay = this.skills.length * 70;
}
