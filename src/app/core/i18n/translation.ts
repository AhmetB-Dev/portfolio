export type LangCode = 'de' | 'en';

type ProjectId = 'join' | 'pollApp' | 'sharkie';

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

  legalNoticePage: {
    title: string;
    backLabel: string;

    imprint: {
      title: string;
      studentNames: string;
      address: string;
      postcodeCity: string;
      contactTitle: string;
      emailLabel: string;
    };

    acceptance: {
      title: string;
      firstBeforeProduct: string;
      firstAfterProduct: string;
      second: string;
    };

    scope: {
      title: string;
      firstAfterProduct: string;
      firstAfterAcademy: string;
      second: string;
      thirdBeforeProduct: string;
      thirdBetweenProductAndAcademy: string;
      thirdAfterAcademy: string;
    };

    proprietaryRights: {
      title: string;
      beforeAcademy: string;
      betweenAcademyAndProduct: string;
      afterProduct: string;
    };

    use: {
      title: string;
      firstAfterProduct: string;
      secondBeforeProduct: string;
      secondAfterProduct: string;
      thirdBeforeProduct: string;
    };

    disclaimer: {
      title: string;
      firstAfterProduct: string;
      secondBeforeAcademy: string;
      secondAfterAcademy: string;
      thirdBeforeProduct: string;
    };

    indemnity: {
      title: string;
      beforeAcademy: string;
      betweenAcademyAndProduct: string;
      afterProduct: string;
      contactBeforeEmail: string;
      contactEmail: string;
      dateLabel: string;
      date: string;
    };
  };

  privacyPolicyPage: {
    title: string;
    backLabel: string;
    firstSectionTitle: string;
    firstParagraph: string;
    secondSectionTitle: string;
    secondParagraph: string;
  };

  footer: {
    legalNotice: string;
    privacyPolicy: string;
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

        pollApp: {
          description:
            'Eine Umfrage-App zum Erstellen, Teilen und Auswerten von Abstimmungen und Nutzerfeedback.',
        },

        sharkie: {
          description:
            'Ein 2D-Jump-and-Run-Spiel mit einer Unterwasserwelt, Gegnern und sammelbaren Objekten.',
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

    legalNoticePage: {
      title: 'Impressum',
      backLabel: 'Zurück zur Startseite',

      imprint: {
        title: 'Impressum',
        studentNames: '[Liste der Namen]',
        address: '[Adresse des Portfolio-Betreibers]',
        postcodeCity: '[Postleitzahl und Ort]',
        contactTitle: 'Das Board erkunden',
        emailLabel: 'E-Mail',
      },

      acceptance: {
        title: 'Annahme der Bedingungen',
        firstBeforeProduct: 'Durch den Zugriff auf und die Nutzung von',
        firstAfterProduct:
          '(Produkt) erkennen Sie die folgenden Bedingungen sowie alle Richtlinien, Leitlinien oder Änderungen an, die Ihnen von Zeit zu Zeit vorgelegt werden können, und stimmen ihnen zu.',
        second:
          'Wir, die aufgeführten Studierenden, können die Bedingungen von Zeit zu Zeit ohne vorherige Ankündigung aktualisieren oder ändern.',
      },

      scope: {
        title: 'Umfang und Eigentum am Produkt',
        firstAfterProduct:
          'wurde im Rahmen eines studentischen Gruppenprojekts in einem Webentwicklungs-Bootcamp bei der',
        firstAfterAcademy:
          ' entwickelt. Es dient Bildungszwecken und ist nicht für eine umfangreiche private oder geschäftliche Nutzung vorgesehen.',
        second:
          'Daher können wir keine durchgängige Verfügbarkeit, Zuverlässigkeit, Richtigkeit oder andere Qualitätsmerkmale dieses Produkts garantieren.',
        thirdBeforeProduct: 'Das Design von',
        thirdBetweenProductAndAcademy: 'ist Eigentum der',
        thirdAfterAcademy:
          '. Die unbefugte Nutzung, Vervielfältigung, Änderung, Verbreitung oder Nachbildung des Designs ist strengstens untersagt.',
      },

      proprietaryRights: {
        title: 'Eigentumsrechte',
        beforeAcademy: 'Abgesehen von dem Design im Eigentum der',
        betweenAcademyAndProduct:
          ' behalten wir, die aufgeführten Studierenden, sämtliche Eigentumsrechte an',
        afterProduct:
          ', einschließlich aller damit verbundenen urheberrechtlich geschützten Materialien, Marken und sonstigen geschützten Informationen.',
      },

      use: {
        title: 'Nutzung des Produkts',
        firstAfterProduct:
          'darf ausschließlich für rechtmäßige Zwecke und in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften verwendet werden.',
        secondBeforeProduct: 'Jede Nutzung von',
        secondAfterProduct:
          'für rechtswidrige Aktivitäten oder um eine andere Person zu belästigen, zu schädigen, zu bedrohen oder einzuschüchtern, ist strengstens untersagt.',
        thirdBeforeProduct:
          'Sie sind allein für Ihre Interaktionen mit anderen Nutzern von',
      },

      disclaimer: {
        title: 'Gewährleistungsausschluss und Haftungsbeschränkung',
        firstAfterProduct:
          'wird „wie besehen“ ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt. Dies schließt insbesondere stillschweigende Gewährleistungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten ein.',
        secondBeforeAcademy:
          'In keinem Fall haften wir, die aufgeführten Studierenden oder die',
        secondAfterAcademy:
          ', für unmittelbare, mittelbare, zufällige, besondere, Folge- oder exemplarische Schäden. Dies schließt insbesondere Schäden durch entgangenen Gewinn, Verlust von Ansehen, Nutzung, Daten oder andere immaterielle Verluste ein.',
        thirdBeforeProduct:
          'Dies gilt selbst dann, wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden, die aus der Nutzung oder Leistung von',
      },

      indemnity: {
        title: 'Freistellung',
        beforeAcademy:
          'Sie erklären sich damit einverstanden, uns, die aufgeführten Studierenden, die',
        betweenAcademyAndProduct:
          ' sowie unsere verbundenen Unternehmen, Partner, Führungskräfte, Direktoren, Vertreter und Beschäftigten von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Haftungen einschließlich angemessener Rechtskosten freizustellen, zu verteidigen und schadlos zu halten, die aus Ihrer Nutzung von',
        afterProduct:
          'und/oder Ihrem Verstoß gegen dieses Impressum entstehen oder damit zusammenhängen.',
        contactBeforeEmail:
          'Bei Fragen oder Mitteilungen kontaktieren Sie uns bitte unter',
        contactEmail: '[Kontakt-E-Mail]',
        dateLabel: 'Datum',
        date: '26. Juli 2025',
      },
    },

    privacyPolicyPage: {
      title: 'Datenschutzerklärung',
      backLabel: 'Zurück zur Startseite',
      firstSectionTitle: 'Untertitel',
      firstParagraph:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      secondSectionTitle: 'Untertitel',
      secondParagraph:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },

    footer: {
      legalNotice: 'Impressum',
      privacyPolicy: 'Datenschutzerklärung',
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

        pollApp: {
          description:
            'A polling app for creating, sharing, and evaluating polls and user feedback.',
        },

        sharkie: {
          description:
            'A 2D platformer game featuring an underwater world, enemies, and collectible items.',
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

    legalNoticePage: {
      title: 'Legal notice',
      backLabel: 'Back to homepage',

      imprint: {
        title: 'Imprint',
        studentNames: '[Student Names List]',
        address: '[Address of the Portfolio operator]',
        postcodeCity: '[Postcode and city]',
        contactTitle: 'Exploring the Board',
        emailLabel: 'Email',
      },

      acceptance: {
        title: 'Acceptance of terms',
        firstBeforeProduct: 'By accessing and using',
        firstAfterProduct:
          '(Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time.',
        second:
          'We, the listed students, may update or change the terms and conditions from time to time without notice.',
      },

      scope: {
        title: 'Scope and ownership of the product',
        firstAfterProduct:
          'has been developed as part of a student group project in a web development bootcamp at the',
        firstAfterAcademy:
          '. It has an educational purpose and is not intended for extensive personal and business usage.',
        second:
          'As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.',
        thirdBeforeProduct: 'The design of',
        thirdBetweenProductAndAcademy: 'is owned by the',
        thirdAfterAcademy:
          '. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.',
      },

      proprietaryRights: {
        title: 'Proprietary rights',
        beforeAcademy: 'Aside from the design owned by',
        betweenAcademyAndProduct:
          ', we, the listed students, retain all proprietary rights in',
        afterProduct:
          ', including any associated copyrighted material, trademarks, and other proprietary information.',
      },

      use: {
        title: 'Use of the product',
        firstAfterProduct:
          'is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations.',
        secondBeforeProduct: 'Any use of',
        secondAfterProduct:
          'for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited.',
        thirdBeforeProduct:
          'You are solely responsible for your interactions with other users of',
      },

      disclaimer: {
        title: 'Disclaimer of warranties and limitation of liability',
        firstAfterProduct:
          'is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        secondBeforeAcademy:
          'In no event will we, the listed students, or the',
        secondAfterAcademy:
          ', be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.',
        thirdBeforeProduct:
          'This applies even if we have been advised of the possibility of such damages arising out of or in connection with the use or performance of',
      },

      indemnity: {
        title: 'Indemnity',
        beforeAcademy:
          'You agree to indemnify, defend, and hold harmless us, the listed students, the',
        betweenAcademyAndProduct:
          ', and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability, including reasonable legal fees, arising out of or relating to your use of',
        afterProduct: 'and/or your breach of this Legal Notice.',
        contactBeforeEmail:
          'For any questions or notices, please contact us at',
        contactEmail: '[Contact Email]',
        dateLabel: 'Date',
        date: 'July 26, 2025',
      },
    },

    privacyPolicyPage: {
      title: 'Privacy policy',
      backLabel: 'Back to homepage',
      firstSectionTitle: 'Subtitle',
      firstParagraph:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      secondSectionTitle: 'Subtitle',
      secondParagraph:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },

    footer: {
      legalNotice: 'Legal notice',
      privacyPolicy: 'Privacy policy',
    },
  },
};
