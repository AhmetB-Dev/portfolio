export type LangCode = 'de' | 'en';

type ProjectId = 'join' | 'pollApp' | 'sharkie' | 'coderr' | 'videoflix';

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
    learningInterest: string;
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
    sendingButton: string;
    goUpLabel: string;
    successLabel: string;
    successTitle: string;
    successMessage: string;
    errorLabel: string;
    errorTitle: string;
    sendErrorMessage: string;
    manualSendText: string;
    manualSendButton: string;
    closeStatusLabel: string;
    closeStatusButton: string;

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

    responsible: {
      title: string;
      intro: string;
      name: string;
      addressLabel: string;
      legalNoticeLink: string;
      emailLabel: string;
      emailAddress: string;
    };

    hosting: {
      title: string;
      paragraph: string;
    };

    contactForm: {
      title: string;
      paragraph: string;
    };

    languageStorage: {
      title: string;
      paragraph: string;
    };

    fonts: {
      title: string;
      paragraph: string;
    };

    rights: {
      title: string;
      paragraph: string;
    };

    status: {
      label: string;
      date: string;
    };
  };

  footer: {
    legalNotice: string;
    privacyPolicy: string;
  };
};
