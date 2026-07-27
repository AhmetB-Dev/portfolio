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
    role: 'FRONTEND ENTWICKLER',
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
    lead: 'Eine Auswahl an Technologien, die ich in meinen Projekten verwendet habe – mit Fokus auf saubere, wartbare und skalierbare Webentwicklung.',
    otherSkillTitle: 'Du suchst noch einen anderen Skill?',
    otherSkillText:
      'Ich lerne schnell und erweitere meinen Stack gerne – besonders, wenn es hilft, bessere Produkte zu bauen.',
    learningInterest: 'Ich interessiere mich besonders dafür, Folgendes zu lernen:',
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
    headline: 'Haben Sie ein Projekt im Kopf?',
    text: 'Sie suchen Unterstützung bei der Entwicklung einer modernen Webanwendung oder möchten sich über ein gemeinsames Projekt austauschen? Senden Sie mir gerne eine Nachricht.',
    namePlaceholder: 'Ihr Name',
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    messagePlaceholder: 'Ihre Nachricht',
    privacyPrefix: 'Ich habe die',
    privacyLink: 'Datenschutzerklärung',
    privacySuffix: 'gelesen und stimme zu.',
    button: 'Nachricht senden :)',
    sendingButton: 'Wird gesendet ...',
    goUpLabel: 'Nach oben',
    successLabel: 'Nachricht gesendet',
    successTitle: 'Vielen Dank!',
    successMessage: 'Vielen Dank! Ich melde mich so bald wie möglich bei Ihnen.',
    errorLabel: 'Nachricht konnte nicht gesendet werden',
    errorTitle: 'Das hat leider nicht funktioniert',
    sendErrorMessage: 'Bitte versuchen Sie es später erneut.',
    manualSendText: 'Alternativ können Sie Ihre Nachricht direkt per E-Mail senden:',
    manualSendButton: 'E-Mail an ahmet_ba@web.de senden',
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
      address: '[Adresse des Portfolio-Betreibers]',
      postcodeCity: '[Postleitzahl und Ort]',
      contactTitle: 'Das Board erkunden',
      emailLabel: 'Ahmet_ba@web.de',
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
      thirdBeforeProduct: 'Sie sind allein für Ihre Interaktionen mit anderen Nutzern von',
    },

    disclaimer: {
      title: 'Gewährleistungsausschluss und Haftungsbeschränkung',
      firstAfterProduct:
        'wird „wie besehen“ ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt. Dies schließt insbesondere stillschweigende Gewährleistungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten ein.',
      secondBeforeAcademy: 'In keinem Fall haften wir, die aufgeführten Studierenden oder die',
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
      contactBeforeEmail: 'Bei Fragen oder Mitteilungen kontaktieren Sie uns bitte unter',
      contactEmail: 'Ahmet_ba@web.de',
      dateLabel: 'Datum',
      date: '26. Juli 2025',
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
        'Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch notwendige Daten, beispielsweise die IP-Adresse, den Zeitpunkt des Zugriffs, die aufgerufene Seite und Browserinformationen. Die Verarbeitung dient der sicheren und fehlerfreien Bereitstellung der Website und erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für diesen Zweck nicht mehr erforderlich sind.',
    },

    contactForm: {
      title: '3. Kontaktformular',
      paragraph:
        'Wenn Sie das Kontaktformular verwenden, werden Ihr Name, Ihre E-Mail-Adresse und Ihre Nachricht verarbeitet. Die Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet und können dabei durch den Hosting- und E-Mail-Anbieter verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen und Art. 6 Abs. 1 lit. f DSGVO bei allgemeinen Anfragen. Die Daten werden gelöscht, sobald die Anfrage abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten bestehen.',
    },

    languageStorage: {
      title: '4. Spracheinstellung',
      paragraph:
        'Die ausgewählte Sprache wird unter dem Namen „app_lang“ im lokalen Speicher Ihres Browsers gespeichert. Dies dient ausschließlich dazu, Ihre Spracheinstellung beizubehalten. Es werden keine Analyse- oder Werbe-Cookies eingesetzt. Die gespeicherte Einstellung können Sie jederzeit über Ihren Browser löschen.',
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
