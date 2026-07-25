import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language } from '../services/language';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().footer);
}
