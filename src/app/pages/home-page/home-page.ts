import { Component } from '@angular/core';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { AboutSection } from '../../sections/about-section/about-section';
import { HeroSection } from '../../sections/hero-section/hero-section';
import { ContactSection } from '../../sections/contact-section/contact-section';
import { ProjectsSection } from '../../sections/projects-section/projects-section';
import { SkillsSection } from '../../sections/skills-section/skills-section';

@Component({
  selector: 'app-home-page',
  imports: [
    Header,
    Footer,
    HeroSection,
    ContactSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
