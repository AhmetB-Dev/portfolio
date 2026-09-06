# Developer Portfolio

Personal developer portfolio built with Angular, TypeScript and SCSS.

The portfolio presents my frontend and backend projects, technical skills and contact information in a responsive, bilingual interface.

## Features

- Responsive layout for desktop, tablet and mobile
- German and English language support
- Project showcase with live-demo and GitHub links
- Contact form with client-side validation
- Dedicated legal notice and privacy policy pages
- Reusable Angular components, sections and directives
- Responsive typography using `clamp()` and shared SCSS variables
- Reduced-motion support for improved accessibility
- Automated component and service tests with Jasmine and Karma

## Technologies

- Angular 22
- TypeScript 6
- SCSS / CSS3
- HTML5
- Angular Reactive Forms
- Angular Router
- Angular Signals
- RxJS
- Jasmine
- Karma

## Project Structure

```text
src/
├── app/
│   ├── core/        # Header, footer, translations and shared services
│   ├── pages/       # Home, legal notice and privacy policy pages
│   ├── sections/    # Hero, about, skills, projects and contact sections
│   └── shared/      # Reusable directives and shared functionality
├── styles/          # Global fonts and SCSS variables
└── styles.scss      # Global styles
```

## Portfolio Projects

The portfolio currently highlights several practical projects across frontend and backend development:

- **Join** — HTML, CSS, JavaScript, Firebase
- **PollApp** — Angular, TypeScript, SCSS, Supabase
- **Sharkie** — HTML, CSS, JavaScript
- **Coderr** — Python, Django, Django REST Framework, PostgreSQL
- **Videoflix** — Python, Django, Django REST Framework, PostgreSQL, Redis, Docker

## Run Locally

### Requirements

- Node.js version compatible with Angular 22
- npm

### Installation

```bash
npm install
npm start
```

The development server will start locally and open the application in the browser.

## Build

Create a production build with:

```bash
npm run build
```

## Tests

Run the test suite with:

```bash
npm test
```

## Contact Form

The contact section uses Angular Reactive Forms for validation and sends validated form data to a separate mail endpoint used by the deployed portfolio.

## Purpose

This portfolio demonstrates practical experience with modern Angular development, TypeScript, responsive UI implementation, component architecture, form validation, accessibility-conscious styling, testing and the presentation of fullstack projects.

## Author

**Ahmet Balci**

GitHub: [AhmetB-Dev](https://github.com/AhmetB-Dev)
