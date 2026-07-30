import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const navigationEntry = performance.getEntriesByType(
  'navigation',
)[0] as PerformanceNavigationTiming | undefined;

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (navigationEntry?.type === 'reload') {
  const url = new URL(window.location.href);

  if (url.hash) {
    url.hash = '';
    history.replaceState(history.state, '', `${url.pathname}${url.search}`);
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
