export type LangCode = 'de' | 'en';

type ProjectId = 'join' | 'sharkie' | 'memory' | 'app' | 'pollApp';

export type TranslationModel = {
  header: {
    about: string;
    skills: string;
    portfolio: string;
    contact: string;
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
    cardLocation: string;
    cardLearning: string;
    cardProblemSolving: string;
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
    liveBtn: string;
    githubBtn: string;
    items: Record<
      ProjectId,
      {
        description: string;
      }
    >;
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
    successMessage: string;

    errors: {
      nameRequired: string;
      nameMinLength: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageMinLength: string;
      privacyRequired: string;
      messageMaxLength: string;
    };
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
      contact: 'Kontakt',
    },

    hero: {
      intro: 'Ich bin',
      role: 'FRONTEND ENTWICKLER',
      cta: 'Lass uns reden',
      scroll: 'Runterscrollen',
    },

    about: {
      title: 'Über mich',
      lead: 'Ich entwickle moderne Webanwendungen und begeistere mich dafür, aus Ideen funktionierende und benutzerfreundliche Lösungen zu schaffen. Dabei lege ich Wert auf klare Strukturen, sauberen Code und kontinuierliche Weiterentwicklung.',
      cardLocation: `Ich lebe in Siegen und arbeite bevorzugt remote, bin aber auch für hybride Arbeitsmodelle offen.`,
      cardLearning:
        'Neue Technologien lerne ich am besten durch praktische Projekte. Dabei erweitere ich Schritt für Schritt meine Kenntnisse in der modernen Webentwicklung.',
      cardProblemSolving:
        'Ich gehe Herausforderungen strukturiert an, zerlege komplexe Aufgaben in kleinere Schritte und entwickle nachvollziehbare, wartbare Lösungen.',
    },

    skills: {
      title: 'Skills',
      lead: 'Eine Auswahl an Technologien, die ich in meinen Projekten verwendet habe – mit Fokus auf saubere, wartbare und skalierbare Webentwicklung.',
      otherSkillTitle: 'Du suchst noch einen anderen Skill?',
      otherSkillText:
        'Ich lerne schnell und erweitere meinen Stack gerne – besonders, wenn es hilft, bessere Produkte zu bauen.',
      cta: 'Kontakt aufnehmen',
    },

    projects: {
      title: 'Portfolio',
      lead: 'Hier findest du eine Auswahl meiner Arbeiten – interagiere mit den Projekten und sieh meine Skills in Aktion.',
      liveBtn: 'Live Test',
      githubBtn: 'GitHub',

      items: {
        join: {
          description:
            'Ein Kanban-Task-Management-Tool zum Erstellen, Organisieren und Verwalten von Aufgaben im Team.',
        },

        sharkie: {
          description:
            'Ein 2D-Jump-and-Run-Spiel mit einer Unterwasserwelt, Gegnern und sammelbaren Objekten.',
        },

        memory: {
          description:
            'Ein klassisches Memory-Spiel, bei dem passende Kartenpaare gefunden werden müssen.',
        },

        app: {
          description:
            'Eine Produktivitäts-App, die Nutzer dabei unterstützt, Aufgaben zu verwalten und organisiert zu bleiben.',
        },

        pollApp: {
          description:
            'Eine Umfrage-App zum Erstellen, Teilen und Auswerten von Abstimmungen und Nutzerfeedback.',
        },
      },
    },

    contact: {
      title: 'Kontakt',
      headline: 'Hast du ein Problem zu lösen?',
      text: 'Du suchst Unterstützung bei der Entwicklung einer modernen Webanwendung oder möchtest dich über ein gemeinsames Projekt austauschen? Schreib mir gerne eine Nachricht.',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'Deine E-Mail',
      messagePlaceholder: 'Deine Nachricht',
      privacyPrefix: 'Ich habe die',
      privacyLink: 'Datenschutzerklärung',
      privacySuffix: 'gelesen und stimme zu.',
      button: 'Nachricht senden :)',
      goUpLabel: 'Nach oben',
      successMessage: 'Danke! Deine Nachricht wurde erfolgreich gesendet.',

      errors: {
        nameRequired: 'Bitte gib deinen Namen ein.',
        nameMinLength: 'Dein Name sollte mindestens 2 Zeichen haben.',
        emailRequired: 'Bitte gib deine E-Mail-Adresse ein.',
        emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein.',
        messageRequired: 'Bitte gib eine Nachricht ein.',
        messageMinLength: 'Deine Nachricht sollte mindestens 10 Zeichen haben.',
        privacyRequired: 'Bitte akzeptiere die Datenschutzerklärung.',
        messageMaxLength: 'Deine Nachricht darf maximal 5000 Zeichen lang sein.',
      },
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
      contact: 'Contact',
    },

    hero: {
      intro: 'I am',
      role: 'FRONTEND DEVELOPER',
      cta: "Let's talk",
      scroll: 'Scroll down',
    },

    about: {
      title: 'About me',
      lead: 'I develop modern web applications and enjoy turning ideas into functional and user-friendly solutions. I focus on clear structures, clean code, and continuous improvement.',
      cardLocation: `I am based in Siegen and prefer working remotely, but I am also open to hybrid work models.`,
      cardLearning:
        'I learn new technologies best through practical projects, continuously expanding my skills in modern web development.',
      cardProblemSolving:
        'I approach challenges methodically, break complex tasks into manageable steps, and create clear, maintainable solutions.',
    },

    skills: {
      title: 'Skills',
      lead: "A selection of technologies I've used in my projects – focused on clean, maintainable, and scalable web development.",
      otherSkillTitle: 'Looking for another skill?',
      otherSkillText:
        'I learn fast and enjoy expanding my stack – especially when it helps build better products.',
      cta: 'Get in touch',
    },

    projects: {
      title: 'Portfolio',
      lead: 'Explore a selection of my work – interact with the projects to see my skills in action.',
      liveBtn: 'Live Test',
      githubBtn: 'GitHub',

      items: {
        join: {
          description:
            'A Kanban task management tool for creating, organizing, and managing tasks in a team.',
        },

        sharkie: {
          description:
            'A 2D platformer game featuring an underwater world, enemies, and collectible items.',
        },

        memory: {
          description: 'A classic memory game where players flip cards to find matching pairs.',
        },

        app: {
          description: 'A productivity app that helps users manage their tasks and stay organized.',
        },

        pollApp: {
          description:
            'A polling app for creating, sharing, and evaluating polls and user feedback.',
        },
      },
    },

    contact: {
      title: 'Contact',
      headline: 'Got a problem to solve?',
      text: 'Are you looking for support in developing a modern web application or would you like to discuss a potential project? Feel free to send me a message.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      privacyPrefix: 'I have read the',
      privacyLink: 'privacy policy',
      privacySuffix: 'and agree to it.',
      button: 'Send message :)',
      goUpLabel: 'Go up',
      successMessage: 'Thank you! Your message was sent successfully.',

      errors: {
        nameRequired: 'Please enter your name.',
        nameMinLength: 'Your name should have at least 2 characters.',
        emailRequired: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Please enter a message.',
        messageMinLength: 'Your message should have at least 10 characters.',
        privacyRequired: 'Please accept the privacy policy.',
        messageMaxLength: 'Your message must not be longer than 5000 characters.',
      },
    },

    footer: {
      legalNotice: 'Legal notice',
    },
  },
};
