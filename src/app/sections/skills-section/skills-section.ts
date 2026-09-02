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
    {
      src: 'assets/icon/skills/material-design.svg',
      name: 'Material Design',
      labelLines: ['Material', 'Design'],
    },

    { src: 'assets/icon/skills/python.svg', name: 'Python' },
    { src: 'assets/icon/skills/django.svg', name: 'Django' },
    {
      src: 'assets/icon/skills/drf.svg',
      name: 'Django REST Framework',
      labelLines: ['Django REST', 'Framework'],
    },
    { src: 'assets/icon/skills/api.svg', name: 'REST APIs' },
    { src: 'assets/icon/skills/postgreSQL.svg', name: 'PostgreSQL' },
    { src: 'assets/icon/skills/redis.svg', name: 'Redis' },
    { src: 'assets/icon/skills/firebase.svg', name: 'Firebase' },
    { src: 'assets/icon/skills/supabase.svg', name: 'Supabase' },

    { src: 'assets/icon/skills/git.svg', name: 'Git' },
    { src: 'assets/icon/skills/github.svg', name: 'GitHub' },
    { src: 'assets/icon/skills/docker.svg', name: 'Docker' },
    { src: 'assets/icon/skills/linux.svg', name: 'Linux' },
  ];
  readonly learningRevealDelay = this.skills.length * 70;
}
