import { Component, computed, inject } from '@angular/core';
import { Language } from '../services/language';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().footer);
}
