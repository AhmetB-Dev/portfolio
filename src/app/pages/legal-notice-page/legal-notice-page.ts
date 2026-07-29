import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { Language } from '../../core/services/language';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice-page',
  imports: [RouterLink],
  templateUrl: './legal-notice-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './legal-notice-page.scss',
})
export class LegalNoticePage {
  private readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().legalNoticePage);
}
