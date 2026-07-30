# Ahmet Balci — Frontend Developer Portfolio

![Angular](https://img.shields.io/badge/Angular-22.0.8-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-Responsive%20Design-CC6699?logo=sass&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-Karma%20%2B%20Jasmine-8A4182)
![Status](https://img.shields.io/badge/Status-Active%20Development-2ea44f)

A modern, responsive frontend portfolio built with Angular. It presents my development skills, selected projects, professional background, and contact information in German and English.

The application is structured as a maintainable Angular project rather than a static landing page. It uses standalone components, Angular Signals, typed translations, client-side routing, reusable reveal animations, reactive form validation, and a separately hosted mail backend.

---

## Overview

The portfolio combines a single-page presentation with separate legal routes. Its interface focuses on a clear content hierarchy, responsive layouts, accessible feedback, touch-friendly project interactions, and a consistent dark visual design.

### Core Sections

- Hero section with introduction, social actions, and scroll navigation
- About section with professional background and personal strengths
- Skills section with technologies and current learning focus
- Project section with live demos and source-code links
- Contact section with validation and mail submission
- Separate legal notice and privacy policy pages

## Main Features

| Feature | Implementation |
| --- | --- |
| Standalone Angular architecture | Components, pages, and directives are imported directly without feature NgModules |
| Responsive layout | SCSS layouts for desktop, tablet, and mobile viewports |
| Multilingual interface | German and English translations with browser-language detection |
| Persistent language selection | The selected language is stored in `localStorage` |
| Signal-based state | Angular `signal()`, `computed()`, and `effect()` are used for reactive UI state |
| Project showcase | Interactive cards with descriptions, technologies, live demos, and GitHub links |
| Touch support | Project overlays can be activated on devices without hover support |
| Contact form | Angular Reactive Forms with client-side validation and HTTP submission |
| Strict email validation | Email addresses must contain a valid public domain suffix such as `.de` or `.com` |
| Contact status feedback | Accessible success and error dialogs with Escape-key and outside-click support |
| Manual mail fallback | A localized `mailto:` action is shown if the backend request fails |
| Client-side routing | Home, legal notice, privacy policy, and wildcard fallback routes |
| Anchor navigation | Smooth navigation with a dynamic fixed-header offset |
| Scroll restoration | Angular Router restores positions and supports fragment scrolling |
| Reveal animations | Reusable `IntersectionObserver` directive with direction and delay options |
| Reduced-motion support | Animations are skipped when `prefers-reduced-motion: reduce` is enabled |
| Animated mobile menu | Signal-controlled navigation with frame-based icon animation |
| Production optimization | Output hashing and Angular bundle-size budgets are configured |

## Technology Stack

| Category | Technologies |
| --- | --- |
| Framework | Angular 22.0.8 |
| Language | TypeScript 6.0.3 |
| Styling | SCSS, responsive layouts, CSS custom properties, BEM-style class naming |
| State and reactivity | Angular Signals: `signal()`, `computed()`, `effect()` |
| Forms | Angular Reactive Forms |
| Routing | Angular Router with anchor scrolling and scroll restoration |
| HTTP communication | Angular `HttpClient` with XHR backend |
| Animation logic | `IntersectionObserver`, CSS transitions, reduced-motion media queries |
| Testing | Jasmine, Karma, Angular TestBed |
| Backend integration | Separate PHP mail endpoint |

## Architecture

The application is divided into clear responsibility areas:

| Area | Responsibility |
| --- | --- |
| `core/` | Shared application-level components, translations, and services |
| `pages/` | Route-level components such as the home and legal pages |
| `sections/` | Independent portfolio content sections |
| `shared/` | Reusable behavior such as the reveal directive |
| `styles/` | Global fonts, variables, layout rules, branding, and animation utilities |

### State Management

The project does not require a separate state-management library. Small UI states are handled with Angular Signals:

- active interface language,
- mobile-menu state and animation frames,
- active project card on touch devices,
- translated view data derived with `computed()`.

### Internationalization

Translations are strongly typed through a shared translation model. This helps keep the German and English files structurally consistent and makes missing translation properties visible during development.

The `Language` service:

- detects the browser language on first use,
- exposes translated content through Angular Signals,
- allows switching between German and English,
- stores the selected language in `localStorage`,
- restores the saved language on later visits.

## Featured Projects

| Project | Technologies | Description |
| --- | --- | --- |
| **Join** | HTML, CSS, JavaScript, Firebase | A Kanban-style task management application for organizing team tasks |
| **PollApp** | Angular, TypeScript, SCSS, Supabase | A polling application for creating, sharing, and evaluating polls |
| **Sharkie** | HTML, CSS, JavaScript | A browser-based 2D platform game with enemies and collectible items |

The production deployment expects the live demos to be available below these paths:

```text
/projects/join/
/projects/poll-app/
/projects/sharkie/
```

## Project Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── i18n/
│   │   │   └── languages/
│   │   └── services/
│   ├── pages/
│   │   ├── home-page/
│   │   ├── legal-notice-page/
│   │   └── privacy-policy-page/
│   ├── sections/
│   │   ├── about-section/
│   │   ├── contact-section/
│   │   ├── hero-section/
│   │   ├── projects-section/
│   │   └── skills-section/
│   ├── shared/
│   │   └── directives/
│   │       └── reveal/
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
├── styles/
│   ├── _fonts.scss
│   └── _variables.scss
├── index.html
├── main.ts
└── styles.scss
```

## Getting Started

### Prerequisites

Install a Node.js version supported by Angular 22 and a current npm version.

Check the local installation:

```bash
node --version
npm --version
```

### Installation

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

### Development Server

```bash
npm start
```

This starts the Angular development server and opens the application in the browser.

The equivalent Angular CLI command is:

```bash
npx ng serve
```

The local application is available at:

```text
http://localhost:4200
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Starts the development server and opens the browser |
| `npm run build` | Creates an optimized production build |
| `npm run watch` | Rebuilds automatically in development configuration |
| `npm test` | Runs the Karma and Jasmine test suite |
| `npm run ng -- <command>` | Executes an Angular CLI command through npm |

## Production Build

```bash
npm run build
```

The production configuration includes:

- code optimization,
- hashed output filenames,
- an initial bundle warning at `500 kB`,
- an initial bundle error limit at `1 MB`,
- component-style warning and error budgets.

The generated files are written to the Angular output directory inside `dist/`.

## Contact Form

The contact form is built with `NonNullableFormBuilder` and sends validated data to a separately hosted PHP endpoint.

The endpoint is configured in:

```text
src/app/sections/contact-section/contact-section.ts
```

```ts
private readonly mailUrl = 'https://ahmet-balci.de/backend/send-mail.php';
```

### Validation Rules

| Field | Validation |
| --- | --- |
| Name | Required, minimum 2 characters |
| Email | Required, Angular email validation, and public top-level domain validation |
| Message | Required, minimum 10 and maximum 5,000 characters |
| Privacy consent | Must be accepted before submission |

The stricter email expression intentionally rejects incomplete addresses such as:

```text
test@e
```

while accepting normal public addresses such as:

```text
name@example.com
```

The frontend sends the following payload:

```ts
type ContactPayload = {
  name: string;
  email: string;
  message: string;
  honeypot: string;
};
```

For another deployment, replace the endpoint URL with the correct backend address. Server-side validation, spam protection, rate limiting, secure mail configuration, and secret handling must remain backend responsibilities.

## Reveal Animation System

The reusable `appReveal` directive displays elements when they enter the viewport.

Supported directions:

```ts
type RevealDirection = 'up' | 'left' | 'right';
```

Example usage:

```html
<div appReveal revealFrom="right" [revealDelay]="180">
  <!-- Content -->
</div>
```

The implementation:

- uses `IntersectionObserver` instead of continuous scroll listeners,
- supports per-element delays,
- disconnects observers after the first reveal,
- cleans up animation frames, timers, and event listeners,
- prevents temporary horizontal overflow from right-side animations,
- falls back to visible content when the browser API is unavailable,
- skips motion for users who prefer reduced animations.

## Routing and Scroll Behavior

Configured routes:

| Path | Component or behavior |
| --- | --- |
| `/` | Home page |
| `/legal-notice` | Legal notice page |
| `/privacy-policy` | Privacy policy page |
| `**` | Redirects unknown client-side routes to `/` |

The router also enables:

```ts
withInMemoryScrolling({
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
})
```

A dynamic viewport offset accounts for the current header height so anchored sections are not hidden behind the fixed navigation.

### Important Server Requirement

Angular's wildcard route only works after the application has loaded. A production web server must therefore redirect unknown document requests to `index.html`.

Without this fallback, directly opening or reloading a route such as:

```text
/legal-notice
/privacy-policy
```

can return a server-side `404 Not Found`, even though navigation inside the Angular application works correctly.

Static project files below `/projects/` must be excluded from that fallback when they are deployed as independent applications.

## Accessibility and Interaction

The project currently includes:

- semantic section, article, navigation, heading, and form structures,
- keyboard-focus styles for interactive branding,
- ARIA-expanded state for the mobile menu,
- live validation messages,
- modal success and error feedback with `role="alertdialog"`,
- Escape-key and outside-click closing behavior,
- reduced-motion handling,
- decorative images hidden from assistive technologies,
- explicit privacy consent before sending contact data.

Accessibility remains an ongoing development responsibility and should be checked with keyboard-only testing, browser accessibility tools, and screen-reader testing before each production release.

## Testing

The repository contains Angular component tests for the application shell, core components, pages, sections, translations, and language service.

The contact-form tests additionally verify that:

- incomplete email domains are rejected,
- normal public email addresses are accepted.

Run the tests with:

```bash
npm test
```

## Deployment Checklist

Before publishing a production version:

1. Run `npm test` and resolve failed tests.
2. Run a successful production build with `npm run build`.
3. Upload the complete Angular build output, not the uncompiled `src/` directory.
4. Configure the server fallback to `index.html` for Angular routes.
5. Keep independent applications below `/projects/` reachable without Angular fallback conflicts.
6. Verify all live-demo and source-code links.
7. Test the contact endpoint from the deployed domain.
8. Confirm server-side validation and spam protection.
9. Review the legal notice and privacy policy.
10. Replace the current `noindex` robots setting in `src/index.html` when search-engine indexing is intended.
11. Test keyboard navigation, mobile layouts, touch interactions, and form error states.
12. Test the interface with reduced-motion enabled.
13. Check production bundle sizes against the configured budgets.

## Development Principles

- Clear separation between pages, sections, shared behavior, and application services
- Reusable and typed application logic
- Responsive behavior across common viewport sizes
- Accessible interaction and understandable form feedback
- Progressive enhancement and reduced-motion support
- Clear separation between frontend and backend responsibilities
- Continuous improvement through testing and refactoring

## Author

**Ahmet Balci** — Frontend Developer

## License

No open-source license is currently granted for this repository. The source code and original portfolio content may not be reused, copied, modified, or redistributed without explicit permission.
