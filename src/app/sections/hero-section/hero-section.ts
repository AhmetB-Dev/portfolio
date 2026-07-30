import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { Language } from '../../core/services/language';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-hero-section',
  imports: [RevealDirective],
  templateUrl: './hero-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().hero);
}
