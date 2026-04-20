import { Component, computed, inject } from '@angular/core';
import { Language } from '../../core/services/language';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().hero);
}
