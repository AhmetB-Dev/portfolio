import type { TranslationModel } from '../translation.model';

/** Contains all German translations used by the portfolio. */
export const deTranslation: TranslationModel = {
  header: {
    about: 'Über mich',
    skills: 'Skills',
    portfolio: 'Portfolio',
    contact: 'Kontakt',
  },

  hero: {
    intro: 'Ich bin',
    role: 'FULLSTACK ENTWICKLER',
    cta: 'Lass uns reden',
    scroll: 'Runterscrollen',
  },

  about: {
    title: 'Über mich',
    lead: 'Ich entwickle moderne Webanwendungen und begeistere mich dafür, aus Ideen funktionierende und benutzerfreundliche Lösungen zu schaffen. Dabei lege ich Wert auf klare Strukturen, sauberen Code und kontinuierliche Weiterentwicklung.',
    cardLocation: `Ich arbeite bevorzugt remote, bin aber auch für hybride Arbeitsmodelle offen.`,
    cardLearning:
      'Neue Technologien lerne ich am besten durch praktische Projekte. Dabei erweitere ich Schritt für Schritt meine Kenntnisse in der modernen Webentwicklung.',
    cardProblemSolving:
      'Ich gehe Herausforderungen strukturiert an, zerlege komplexe Aufgaben in kleinere Schritte und entwickle nachvollziehbare, wartbare Lösungen.',
  },

  skills: {
    title: 'Skills',
    lead: 'Eine Auswahl an Technologien, die ich in meinen Projekten verwendet habe, mit Fokus auf saubere, wartbare und skalierbare Webentwicklung.',
    otherSkillTitle: 'Du suchst noch einen anderen Skill?',
    otherSkillText:
      'Ich lerne schnell und erweitere meinen Stack gerne, besonders wenn dadurch bessere Produkte entstehen.',
    learningInterest: 'Ich interessiere mich besonders dafür, Folgendes zu lernen:',
    cta: 'Kontakt aufnehmen',
  },

  projects: {
    title: 'Portfolio',
    lead: 'Entdecke eine Auswahl meiner Arbeiten und sieh meine Fähigkeiten in Aktion.',
    liveBtn: 'Live Test',
    githubBtn: 'GitHub',

    items: {
      join: {
        description:
          'Ein Kanban Board zum Erstellen, Organisieren und Verwalten von Aufgaben im Team.',
      },

      pollApp: {
        description:
          'Eine Anwendung zum Erstellen und Teilen von Umfragen sowie zum Auswerten der Ergebnisse und des Nutzerfeedbacks.',
      },

      sharkie: {
        description:
          'Ein zweidimensionales Plattformspiel mit einer Unterwasserwelt, Gegnern und sammelbaren Objekten.',
      },

      coderr: {
        description:
          'Eine REST-API für eine Freelancer-Plattform mit Angeboten, Bestellungen, Profilen und Bewertungen.',
      },

      videoflix: {
        description:
          'Ein Backend für eine Videoplattform mit Authentifizierung, HLS-Streaming und Hintergrundverarbeitung.',
      },
    },
  },

  contact: {
    title: 'Kontakt',
    headline: 'Hast du ein Problem zu lösen?',
    text: 'Du hast eine Idee für eine moderne Webanwendung oder suchst Unterstützung bei der Umsetzung? Schreib mir gerne. Ich freue mich auf deine Nachricht..',
    namePlaceholder: 'Dein Name',
    emailPlaceholder: 'Deine E-Mail',
    messagePlaceholder: 'Deine Nachricht',
    privacyPrefix: 'Ich habe die',
    privacyLink: 'Datenschutzerklärung',
    privacySuffix: 'gelesen und stimme zu.',
    button: 'Nachricht senden :)',
    sendingButton: 'Wird gesendet ...',
    goUpLabel: 'Nach oben',
    successLabel: 'Nachricht gesendet',
    successTitle: 'Vielen Dank!',
    successMessage: 'Vielen Dank! Ich melde mich so bald wie möglich bei dir.',
    errorLabel: 'Nachricht konnte nicht gesendet werden',
    errorTitle: 'Etwas ist schiefgelaufen. Bitte versuche es später erneut.',
    sendErrorMessage: 'Bitte versuche es später erneut.',
    manualSendText: 'Alternativ kannst du deine Nachricht direkt per Mail senden:',
    manualSendButton: 'Mail an ahmet_ba@web.de senden',
    closeStatusLabel: 'Statusmeldung schließen',
    closeStatusButton: 'Schließen',

    errors: {
      nameRequired: 'Bitte geben Sie Ihren Namen ein.',
      nameMinLength: 'Ihr Name sollte mindestens 2 Zeichen enthalten.',
      emailRequired: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
      emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      messageRequired: 'Bitte geben Sie eine Nachricht ein.',
      messageMinLength: 'Ihre Nachricht sollte mindestens 10 Zeichen enthalten.',
      privacyRequired: 'Bitte akzeptieren Sie die Datenschutzerklärung.',
      messageMaxLength: 'Ihre Nachricht darf maximal 5000 Zeichen lang sein.',
    },
  },

  legalNoticePage: {
    title: 'Impressum',
    backLabel: 'Zurück zur Startseite',

    imprint: {
      title: 'Impressum',
      studentNames: 'Ahmet Balci',
      careOf: 'c/o Online-Impressum 10794',
      address: 'Europaring 90',
      postcodeCity: '53757 Sankt Augustin',
      contactTitle: 'Das Board erkunden',
      emailLabel: 'Ahmet_ba@web.de',
    },

    acceptance: {
      title: 'Annahme der Bedingungen',
      firstBeforeProduct: 'Durch den Zugriff auf und die Nutzung von',
      firstAfterProduct:
        '(Produkt) erkennen Sie die folgenden Bedingungen sowie die für die Nutzung geltenden Hinweise an und stimmen diesen zu.',
      second:
        'Die Inhalte und Funktionen des Projekts können im Rahmen der technischen Weiterentwicklung jederzeit angepasst, erweitert oder aktualisiert werden.',
    },

    scope: {
      title: 'Umfang und Eigentum am Produkt',
      firstAfterProduct:
        'wurde ursprünglich im Rahmen einer Weiterbildung für Webentwicklung bei der',
      firstAfterAcademy:
        ' entwickelt und anschließend technisch weiterentwickelt. Das Projekt wird heute als Bestandteil meines persönlichen Entwickler-Portfolios präsentiert.',
      second:
        'Das Projekt dient der Präsentation meiner praktischen Erfahrung und meiner Fähigkeiten in der modernen Webentwicklung. Funktionen und technische Bestandteile können im Zuge der Weiterentwicklung verändert oder erweitert werden.',
      thirdBeforeProduct: 'Das Design von',
      thirdBetweenProductAndAcademy: 'ist Eigentum der',
      thirdAfterAcademy:
        '. Die entsprechenden Designrechte verbleiben beim jeweiligen Rechteinhaber.',
    },

    proprietaryRights: {
      title: 'Eigentumsrechte',
      beforeAcademy: 'Abgesehen von den Designrechten der',
      betweenAcademyAndProduct:
        'liegen die Rechte an den von mir selbst entwickelten Implementierungen, Erweiterungen und eigenen Inhalten von',
      afterProduct:
        'bei den jeweils berechtigten Urhebern. Sämtliche bestehenden Rechte Dritter bleiben hiervon unberührt.',
    },

    use: {
      title: 'Nutzung des Produkts',
      firstAfterProduct:
        'darf ausschließlich für rechtmäßige Zwecke und in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften verwendet werden.',
      secondBeforeProduct: 'Eine Nutzung von',
      secondAfterProduct:
        'für rechtswidrige Aktivitäten, missbräuchliche Handlungen oder zur Beeinträchtigung anderer Personen ist nicht gestattet.',
      thirdBeforeProduct:
        'Für die eigene Nutzung und Interaktion mit den öffentlich zugänglichen Funktionen von',
    },

    disclaimer: {
      title: 'Gewährleistungsausschluss und Haftungsbeschränkung',
      firstAfterProduct:
        'wird als öffentlich zugängliches Portfolio- und Demonstrationsprojekt bereitgestellt. Trotz sorgfältiger Entwicklung kann keine uneingeschränkte Gewähr für dauerhafte Verfügbarkeit, Fehlerfreiheit oder Vollständigkeit übernommen werden.',
      secondBeforeAcademy: 'Für Inhalte und Bestandteile, deren Rechte bei der',
      secondAfterAcademy:
        'oder anderen Dritten liegen, gelten die jeweiligen rechtlichen Bestimmungen und Nutzungsrechte.',
      thirdBeforeProduct:
        'Eine Haftung für Schäden, die unmittelbar aus der Nutzung oder vorübergehenden Nichtverfügbarkeit von',
    },

    indemnity: {
      title: 'Freistellung',
      beforeAcademy: 'Die Rechte und geschützten Inhalte der',
      betweenAcademyAndProduct:
        'sowie anderer Rechteinhaber bleiben vollständig bestehen. Bei der Nutzung von',
      afterProduct: 'sind geltende gesetzliche Vorschriften sowie die Rechte Dritter zu beachten.',
      contactBeforeEmail: 'Bei Fragen oder Mitteilungen kontaktieren Sie mich bitte unter',
      contactEmail: 'Ahmet_ba@web.de',
      dateLabel: 'Datum',
      date: 'September 2026',
    },
  },

  privacyPolicyPage: {
    title: 'Datenschutzerklärung',
    backLabel: 'Zurück zur Startseite',

    responsible: {
      title: '1. Verantwortlicher',
      intro: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
      name: 'Ahmet Balci',
      addressLabel: 'Anschrift:',
      legalNoticeLink: 'siehe Impressum',
      emailLabel: 'E-Mail:',
      emailAddress: 'ahmet_ba@web.de',
    },

    hosting: {
      title: '2. Bereitstellung der Website',
      paragraph:
        'Beim Aufruf dieser Website verarbeitet der Hostinganbieter technisch notwendige Daten, beispielsweise die IP Adresse, den Zeitpunkt des Zugriffs, die aufgerufene Seite und Browserinformationen. Die Verarbeitung dient der sicheren und fehlerfreien Bereitstellung der Website und erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für diesen Zweck nicht mehr erforderlich sind.',
    },

    contactForm: {
      title: '3. Kontaktformular',
      paragraph:
        'Wenn Sie das Kontaktformular verwenden, werden Ihr Name, Ihre Mailadresse und Ihre Nachricht verarbeitet. Die Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet und können dabei durch die Anbieter für Hosting und Mail verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen und Art. 6 Abs. 1 lit. f DSGVO bei allgemeinen Anfragen. Die Daten werden gelöscht, sobald die Anfrage abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten bestehen.',
    },

    languageStorage: {
      title: '4. Spracheinstellung',
      paragraph:
        'Die ausgewählte Sprache wird unter dem Namen „app_lang“ im lokalen Speicher Ihres Browsers gespeichert. Dies dient ausschließlich dazu, Ihre Spracheinstellung beizubehalten. Es werden keine Cookies für Analyse oder Werbung eingesetzt. Die gespeicherte Einstellung können Sie jederzeit über Ihren Browser löschen.',
    },

    fonts: {
      title: '5. Schriftarten',
      paragraph:
        'Die auf dieser Website verwendete Schriftart „Poppins“ wird lokal eingebunden. Beim Laden der Schriftart wird keine Verbindung zu Google Fonts hergestellt.',
    },

    rights: {
      title: '6. Ihre Rechte',
      paragraph:
        'Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem können Sie sich bei einer zuständigen Datenschutzaufsichtsbehörde beschweren. Für Fragen zum Datenschutz können Sie die oben genannte E-Mail-Adresse verwenden.',
    },

    status: {
      label: 'Stand',
      date: 'Juli 2026',
    },
  },

  footer: {
    legalNotice: 'Impressum',
    privacyPolicy: 'Datenschutzerklärung',
  },
};
