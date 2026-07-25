import { Component, computed, inject } from '@angular/core';
import { Language } from '../../core/services/language';

@Component({
  selector: 'app-privacy-policy-page',
  imports: [],
  templateUrl: './privacy-policy-page.html',
  styleUrl: './privacy-policy-page.scss',
})
export class PrivacyPolicyPage {
  private readonly lang = inject(Language);
  readonly title = computed(() => this.lang.texts().footer.privacyPolicy);
}
