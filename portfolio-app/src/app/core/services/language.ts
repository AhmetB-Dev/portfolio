import { Injectable, effect, signal } from '@angular/core';

export type LangCode = 'de' | 'en';
export type LangOption = { code: LangCode; short: string; label: string };

@Injectable({ providedIn: 'root' })
export class Language {
  private readonly STORAGE_KEY = 'app_lang';

  readonly supported: readonly LangOption[] = [
    { code: 'de', short: 'DE', label: 'Deutsch' },
    { code: 'en', short: 'EN', label: 'English' },
  ];

  readonly current = signal<LangCode>(this.readInitial());

  constructor() {
    effect(() => {
      const lang = this.current();
      this.persist(lang);
    });
  }

  set(lang: LangCode) {
    this.current.set(lang);
  }

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

  private persist(lang: LangCode) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, lang);
      }
    } catch {}
  }
}
