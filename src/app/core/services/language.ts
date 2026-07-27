import { Injectable, computed, effect, signal } from '@angular/core';
import { translations } from '../i18n/translation';
import type { LangCode, TranslationModel } from '../i18n/translation';

export type LangOption = { code: LangCode; short: string; label: string };

@Injectable({ providedIn: 'root' })
export class Language {
  private readonly STORAGE_KEY = 'app_lang';

  readonly supported: readonly LangOption[] = [
    { code: 'de', short: 'DE', label: 'Deutsch' },
    { code: 'en', short: 'EN', label: 'English' },
  ];

  readonly current = signal<LangCode>(this.readInitial());

  readonly texts = computed<TranslationModel>(() => translations[this.current()]);

  /**
   * Creates the language service and persists every language change.
   */
  constructor() {
    effect(() => {
      const lang = this.current();
      this.persist(lang);
    });
  }

  /**
   * Changes the active application language.
   *
   * @param lang The supported language code to activate.
   */
  set(lang: LangCode): void {
    this.current.set(lang);
  }

  /**
   * Resolves the initial language from local storage or the browser language.
   *
   * @returns The language code that should be active on startup.
   */
  private readInitial(): LangCode {
    try {
      if (typeof localStorage !== 'undefined') {
        const v = localStorage.getItem(this.STORAGE_KEY);
        if (v === 'de' || v === 'en') return v;
      }
    } catch {}

    const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en').toLowerCase();
    return nav.startsWith('de') ? 'de' : 'en';
  }

  /**
   * Stores the selected language when browser storage is available.
   *
   * @param lang The language code to store.
   */
  private persist(lang: LangCode): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, lang);
      }
    } catch {}
  }
}
