import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { Language } from '../../core/services/language';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-about-section',
  imports: [RevealDirective],
  templateUrl: './about-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './about-section.scss',
})
export class AboutSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().about);
}
