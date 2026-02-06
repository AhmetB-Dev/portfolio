import { Component } from '@angular/core';

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
  readonly skills: SkillIcon[] = [
    { src: 'assets/icon/skills/Property 1=html.png', name: 'HTML' },
    { src: 'assets/icon/skills/Property 1=css.png', name: 'CSS' },
    { src: 'assets/icon/skills/Property 1=JavScript.png', name: 'JavaScript' },
    { src: 'assets/icon/skills/Property 1=Angular.png', name: 'Angular' },
    { src: 'assets/icon/skills/Property 1=Typescript.png', name: 'TypeScript' },
    { src: 'assets/icon/skills/Property 1=Firebase.png', name: 'Firebase' },
    { src: 'assets/icon/skills/Property 1=Git.png', name: 'Git' },
    { src: 'assets/icon/skills/Property 1=Material Design.png', name: 'Material Design' },
    { src: 'assets/icon/skills/Property 1=Continually learning.png', name: 'Continually learning' },
  ];
}
