import { Component, computed, inject } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { Language } from '../services/language';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().header);
}
