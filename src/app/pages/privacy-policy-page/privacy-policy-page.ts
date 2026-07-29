import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { Language } from '../../core/services/language';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy-page',
  imports: [RouterLink],
  templateUrl: './privacy-policy-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './privacy-policy-page.scss',
})
export class PrivacyPolicyPage {
  private readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().privacyPolicyPage);
}
