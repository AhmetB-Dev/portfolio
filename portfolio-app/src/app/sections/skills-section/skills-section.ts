import { Component } from '@angular/core';

type SkillIcon = { src: string; alt: string };

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  skillIcons: SkillIcon[] = [
    { src: 'assets/icon/skills/Property 1=Angular.png', alt: 'Angular' },
    { src: 'assets/icon/skills/Property 1=Typescript.png', alt: 'TypeScript' },
    { src: 'assets/icon/skills/Property 1=JavScript.png', alt: 'JavaScript' },
    { src: 'assets/icon/skills/Property 1=html.png', alt: 'HTML' },
    { src: 'assets/icon/skills/Property 1=css.png', alt: 'CSS' },
    { src: 'assets/icon/skills/Property 1=Firebase.png', alt: 'Firebase' },
    { src: 'assets/icon/skills/Property 1=Git.png', alt: 'Git' },
    { src: 'assets/icon/skills/Property 1=Material Design.png', alt: 'Material Design' },
    { src: 'assets/icon/skills/Property 1=Continually learning.png', alt: 'Continually learning' },
  ];
}
