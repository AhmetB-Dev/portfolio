import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
});

export type LangCode = 'de' | 'en';

export type TranslationModel = {
  header: {
    about: string;
    skills: string;
    portfolio: string;
  };
  hero: {
    intro: string;
    role: string;
    cta: string;
    scroll: string;
  };
  about: {
    title: string;
    lead: string;
    stack1: string;
    stack2: string;
    stack3: string;
    projectsCta: string;
    contactCta: string;
    githubCta: string;
    cardLocation: string;
    cardWorkStyle: string;
    cardLearning: string;
  };
  skills: {
    title: string;
    lead: string;
    otherSkillTitle: string;
    otherSkillText: string;
    cta: string;
  };
  projects: {
    title: string;
    lead: string;
  };
  contact: {
    title: string;
    headline: string;
    text: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    privacyPrefix: string;
    privacyLink: string;
    privacySuffix: string;
    button: string;
    goUpLabel: string;
  };
  footer: {
    legalNotice: string;
  };
};

export const translations: Record<LangCode, TranslationModel> = {
  de: {
    header: {
      about: 'Über mich',
      skills: 'Skills',
      portfolio: 'Portfolio',
    },
    hero: {
      intro: 'Ich bin',
      role: 'Frontend Entwickler',
      cta: 'Lass uns reden',
      scroll: 'Runterscrollen',
    },
    about: {
      title: 'Über mich',
      lead: `Ich bin ein motivierter Softwareentwickler mit einem starken Fokus auf saubere Strukturen, wartbaren Code und praxisnahe Lösungen. Ich arbeite analytisch und selbstorganisiert, zerlege komplexe Probleme in überschaubare Schritte und lege großen Wert auf klare Architektur und gut lesbaren Code. Durch persönliche Projekte erweitere ich mein technisches Wissen kontinuierlich und setze neue Konzepte direkt in der Praxis um.`,
      stack1: 'Angular • TypeScript • REST APIs',
      stack2: 'Komponentenarchitektur, wartbares CSS',
      stack3: 'Problemlösung: analytisch, ausdauernd, teamfähig',
      projectsCta: 'Projekte',
      contactCta: 'Kontakt',
      githubCta: 'GitHub',
      cardLocation: `Ich arbeite strukturiert und selbstorganisiert und bin besonders produktiv in Remote-Umgebungen. Gleichzeitig bin ich offen für gut durchdachte Hybrid-Setups, besonders während des Onboardings oder für wichtige Teamtermine.`,
      cardWorkStyle: `Ich arbeite strukturiert, zuverlässig und eigenverantwortlich. Ich gehe Herausforderungen methodisch an: Anforderungen klären, in sinnvolle Schritte zerlegen, sauber umsetzen und bei Bedarf iterativ verbessern. Ich schätze klare Kommunikation, verständliche Strukturen und Code, der langfristig wartbar bleibt.`,
      cardLearning: `Ich bin offen für neue Technologien und lerne gerne dazu. Durch praktische Projekte, Best Practices und iterative Verbesserungen entwickle ich meine Fähigkeiten kontinuierlich weiter.`,
    },
    skills: {
      title: 'Skills',
      lead: 'Eine Auswahl an Technologien, die ich in meinen Projekten verwendet habe – mit Fokus auf saubere, wartbare und skalierbare Webentwicklung.',
      otherSkillTitle: 'Du suchst noch einen anderen Skill?',
      otherSkillText:
        'Ich lerne schnell und erweitere meinen Stack gerne besonders wenn es hilft, bessere Produkte zu bauen.',
      cta: 'Kontakt aufnehmen',
    },
    projects: {
      title: 'Portfolio',
      lead: 'Hier findest du eine Auswahl meiner Arbeiten – interagiere mit den Projekten und sieh meine Skills in Aktion.',
    },
    contact: {
      title: 'Kontakt',
      headline: 'Hast du ein Problem zu lösen?',
      text: 'Schreib mir gern. Ich freue mich über spannende Projekte, Frontend-Themen und neue Herausforderungen.',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'Deine E-Mail',
      messagePlaceholder: 'Deine Nachricht',
      privacyPrefix: 'Ich habe die ',
      privacyLink: 'Datenschutzerklärung',
      privacySuffix: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
      button: 'Nachricht senden :)',
      goUpLabel: 'Nach oben',
    },
    footer: {
      legalNotice: 'Impressum',
    },
  },

  en: {
    header: {
      about: 'About me',
      skills: 'Skills',
      portfolio: 'Portfolio',
    },
    hero: {
      intro: 'I am',
      role: 'Frontend Developer',
      cta: `Let's talk`,
      scroll: 'Scroll down',
    },
    about: {
      title: 'About me',
      lead: `I am a motivated software developer with a strong focus on clean structures, maintainable code, and practical solutions. I work analytically and in a self-organized manner, breaking down complex problems into manageable steps while placing great emphasis on clear architecture and readable code. Through personal projects, I continuously expand my technical knowledge and apply new concepts directly in practice.`,
      stack1: 'Angular • TypeScript • REST APIs',
      stack2: 'Component architecture, maintainable CSS',
      stack3: 'Problem-solving: analytical, persistent, collaborative',
      projectsCta: 'Projects',
      contactCta: 'Contact',
      githubCta: 'GitHub',
      cardLocation: `I work in a structured and self-organized way and feel most productive in remote environments. At the same time, I'm open to well-designed hybrid setups, especially during onboarding or for key team sessions.`,
      cardWorkStyle: `I work in a structured, reliable, and self-driven way. I approach challenges methodically: clarifying requirements, breaking them into manageable steps, implementing solutions cleanly, and iterating when needed. I value clear communication, understandable structures, and code that remains maintainable over time.`,
      cardLearning: `I'm open-minded and enjoy learning new technologies. Through hands-on projects, best practices, and iterative improvements, I continuously develop my skills.`,
    },
    skills: {
      title: 'Skills',
      lead: `A selection of technologies I've used in my projects—focused on clean, maintainable, and scalable web development.`,
      otherSkillTitle: 'Looking for another skill?',
      otherSkillText:
        'I learn fast and enjoy expanding my stack—especially when it helps build better products.',
      cta: 'Get in touch',
    },
    projects: {
      title: 'Portfolio',
      lead: 'Explore a selection of my work here - interact with projects to see my skills in action.',
    },
    contact: {
      title: 'Contact',
      headline: 'Got a problem to solve?',
      text: 'Feel free to message me. I am always open to interesting projects, frontend topics, and new challenges.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      privacyPrefix: `I've read the `,
      privacyLink: 'privacy policy',
      privacySuffix: ' and agree to the processing of my data.',
      button: 'Send messagne :)',
      goUpLabel: 'Back to top',
    },
    footer: {
      legalNotice: 'Legal notice',
    },
  },
};
