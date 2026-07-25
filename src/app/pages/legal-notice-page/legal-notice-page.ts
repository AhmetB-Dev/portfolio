import { Component, computed, inject } from '@angular/core';
import { Language } from '../../core/services/language';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice-page',
  imports: [RouterLink],
  templateUrl: './legal-notice-page.html',
  styleUrl: './legal-notice-page.scss',
})
export class LegalNoticePage {
  private readonly lang = inject(Language);
  readonly title = computed(() => this.lang.texts().footer.legalNotice);
}
