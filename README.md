# Ahmet Balci — Frontend Developer Portfolio

![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-Responsive%20Design-CC6699?logo=sass&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active%20Development-2ea44f)

A modern, responsive portfolio website built with Angular. It presents my frontend development skills, selected projects, professional background, and contact information in German and English.

---

## Overview

This portfolio is designed as a maintainable Angular application rather than a static landing page. It uses standalone components, Angular Signals, route-based legal pages, a custom translation system, and a validated contact form connected to a separately hosted mail backend.

The interface focuses on clear structure, responsive behavior, accessibility-conscious markup, and a consistent dark visual design.

## Main Features

| Feature                       | Implementation                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| Responsive layout             | SCSS-based layouts for desktop, tablet, and mobile devices                                |
| Multilingual interface        | German and English translations with automatic browser-language detection                 |
| Persistent language selection | Selected language is stored in `localStorage`                                             |
| Project showcase              | Interactive project cards with live-demo and GitHub links                                 |
| Contact form                  | Angular Reactive Forms with validation and HTTP submission                                |
| User feedback                 | Accessible success and error dialogs with Escape-key support                              |
| Client-side routing           | Home, legal notice, and privacy policy routes                                             |
| Anchor navigation             | Smooth section navigation with scroll restoration                                         |
| Touch support                 | Project interactions adapted for devices without hover support                            |
| Accessibility                 | Semantic structure, keyboard-friendly controls, ARIA states, and live validation messages |

## Technology Stack

| Category             | Technologies                                          |
| -------------------- | ----------------------------------------------------- |
| Framework            | Angular 22                                            |
| Language             | TypeScript                                            |
| Styling              | SCSS, responsive layouts, BEM-style class naming      |
| State and reactivity | Angular Signals, `computed()`, `signal()`, `effect()` |
| Forms                | Angular Reactive Forms                                |
| Routing              | Angular Router                                        |
| HTTP communication   | Angular `HttpClient`                                  |
| Testing              | Angular component unit test files                     |
| Backend integration  | Separate PHP mail endpoint                            |

## Featured Projects

The portfolio currently presents the following projects:

| Project     | Technologies                        | Description                                                          |
| ----------- | ----------------------------------- | -------------------------------------------------------------------- |
| **Join**    | HTML, CSS, JavaScript, Firebase     | A Kanban-style task management application for organizing team tasks |
| **PollApp** | Angular, TypeScript, SCSS, Supabase | A polling application for creating, sharing, and evaluating polls    |
| **Sharkie** | HTML, CSS, JavaScript               | A browser-based 2D platform game with enemies and collectible items  |

## Project Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── i18n/
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
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
├── styles/
├── index.html
├── main.ts
└── styles.scss
```

## Getting Started

### Prerequisites

Install a Node.js version supported by Angular 22 and a current npm version.

Check your local installation:

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
npx ng serve
```

Open `http://localhost:4200` in your browser. The application reloads automatically when source files change.

### Production Build

```bash
npx ng build
```

The optimized production files are generated in the `dist/` directory.

### Unit Tests

```bash
npx ng test
```

## Contact Form Configuration

The Angular frontend sends validated form data to a separately hosted PHP endpoint.

The endpoint is currently configured in:

```text
src/app/sections/contact-section/contact-section.ts
```

```ts
private readonly mailUrl = 'https://ahmet-balci.de/backend/send-mail.php';
```

For another deployment, replace this URL with the appropriate backend endpoint. Email delivery, server-side validation, rate limiting, spam protection, and secrets must be handled by the backend rather than the Angular client.

## Internationalization

Translations are stored in typed language files:

```text
src/app/core/i18n/languages/de.translation.ts
src/app/core/i18n/languages/en.translation.ts
```

The `Language` service:

- detects the browser language on first use,
- exposes translated content through Angular Signals,
- allows users to switch between German and English,
- stores the selected language in `localStorage`.

## Deployment Notes

Before publishing a production version:

1. Run a successful production build with `npx ng build`.
2. Verify all project and social links.
3. Test the contact endpoint from the deployed domain.
4. Review the legal notice and privacy policy.
5. Replace the current `noindex` robots setting in `src/index.html` when search-engine indexing is intended.
6. Test keyboard navigation, mobile layouts, and form error states.

## Development Priorities

- Clean and maintainable component structure
- Reusable and typed application logic
- Responsive behavior across common viewport sizes
- Accessible interaction and form feedback
- Clear separation between frontend and backend responsibilities
- Progressive improvement through testing and refactoring

## Author

**Ahmet Balci** — Frontend Developer

## License

No open-source license is currently granted for this repository. The source code and original portfolio content may not be reused, copied, or redistributed without permission.
