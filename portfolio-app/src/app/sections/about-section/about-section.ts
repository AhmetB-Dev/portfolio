import { Component, computed, inject } from '@angular/core';
import { Language } from '../../core/services/language';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().about);
}
