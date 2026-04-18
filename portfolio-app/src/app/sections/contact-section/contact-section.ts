import { Component, computed, inject } from '@angular/core';
import { Language } from '../../core/services/language';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().contact);
}
