import type { TranslationModel } from '../translation.model';

/** Contains all English translations used by the portfolio. */
export const enTranslation: TranslationModel = {
  header: {
    about: 'About me',
    skills: 'Skills',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },

  hero: {
    intro: 'I am',
    role: 'FULLSTACK DEVELOPER',
    cta: "Let's talk",
    scroll: 'Scroll down',
  },

  about: {
    title: 'About me',
    lead: 'I develop modern web applications and enjoy turning ideas into functional and user-friendly solutions. I focus on clear structures, clean code, and continuous improvement.',
    cardLocation: `I prefer working remotely, but I’m also open to hybrid work arrangements.`,
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
    learningInterest: 'I have a special interest in learning',
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
        description: 'A polling app for creating, sharing, and evaluating polls and user feedback.',
      },

      sharkie: {
        description:
          'A 2D platformer game featuring an underwater world, enemies, and collectible items.',
      },
      coderr: {
        description:
          'A REST API for a freelance marketplace with offers, orders, user profiles, and reviews.',
      },

      videoflix: {
        description:
          'A video streaming backend with secure authentication, HLS streaming, and background processing.',
      },
    },
  },

  contact: {
    title: 'Contact',
    headline: 'Got a problem to solve?',
    text: 'Do you have an idea for a modern web application or are you looking for support with its implementation? Feel free to get in touch. I look forward to hearing from you.',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message',
    privacyPrefix: 'I have read the',
    privacyLink: 'privacy policy',
    privacySuffix: 'and agree to it.',
    button: 'Send message :)',
    sendingButton: 'Sending ...',
    goUpLabel: 'Go up',
    successLabel: 'Message sent',
    successTitle: 'Thank you!',
    successMessage: 'Thank you! I will get back to you as soon as possible.',
    errorLabel: 'Message could not be sent',
    errorTitle: 'Something went wrong. Please try again later',
    sendErrorMessage: 'Please try again later.',
    manualSendText: 'Alternatively, you can send your message directly by email:',
    manualSendButton: 'Email ahmet_ba@web.de',
    closeStatusLabel: 'Close status message',
    closeStatusButton: 'Close',

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
      studentNames: 'Ahmet Balci',
      careOf: 'c/o Online-Impressum 10794',
      address: 'Europaring 90',
      postcodeCity: '53757 Sankt Augustin',
      contactTitle: 'Exploring the Board',
      emailLabel: 'Ahmet_ba@web.de',
    },

    acceptance: {
      title: 'Acceptance of terms',
      firstBeforeProduct: 'By accessing and using',
      firstAfterProduct:
        '(Product), you acknowledge and agree to the following terms and the applicable information regarding its use.',
      second:
        'The content and functionality of the project may be adjusted, extended, or updated at any time as part of its ongoing technical development.',
    },

    scope: {
      title: 'Scope and ownership of the product',
      firstAfterProduct:
        'was originally developed as part of a professional web development training program at',
      firstAfterAcademy:
        ' and has since been technically developed further. The project is now presented as part of my personal developer portfolio.',
      second:
        'The project showcases my practical experience and skills in modern web development. Features and technical components may be changed or expanded as the project continues to evolve.',
      thirdBeforeProduct: 'The design of',
      thirdBetweenProductAndAcademy: 'is owned by',
      thirdAfterAcademy: '. The respective design rights remain with the applicable rights holder.',
    },

    proprietaryRights: {
      title: 'Proprietary rights',
      beforeAcademy: 'Aside from the design rights owned by',
      betweenAcademyAndProduct:
        ', the rights to implementations, extensions, and original content developed by me for',
      afterProduct:
        'remain with their respective authors and rights holders. Existing third-party rights remain unaffected.',
    },

    use: {
      title: 'Use of the product',
      firstAfterProduct:
        'may only be used for lawful purposes and in accordance with all applicable laws and regulations.',
      secondBeforeProduct: 'Any use of',
      secondAfterProduct:
        'for unlawful activities, abusive conduct, or actions intended to harm or interfere with other persons is prohibited.',
      thirdBeforeProduct:
        'Users are responsible for their own use and interaction with the publicly accessible features of',
    },

    disclaimer: {
      title: 'Disclaimer of warranties and limitation of liability',
      firstAfterProduct:
        'is provided as a publicly accessible portfolio and demonstration project. Despite careful development, uninterrupted availability, complete accuracy, and freedom from errors cannot be guaranteed.',
      secondBeforeAcademy: 'For content and components whose rights belong to',
      secondAfterAcademy:
        'or other third parties, the respective legal provisions and usage rights apply.',
      thirdBeforeProduct:
        'No liability can be assumed for damages directly resulting from the use or temporary unavailability of',
    },

    indemnity: {
      title: 'Indemnity',
      beforeAcademy: 'The rights and protected content of',
      betweenAcademyAndProduct: 'and other rights holders remain fully protected. When using',
      afterProduct: ', applicable laws and the rights of third parties must be respected.',
      contactBeforeEmail: 'For any questions or notices, please contact me at',
      contactEmail: 'Ahmet_ba@web.de',
      dateLabel: 'Date',
      date: 'September 2026',
    },
  },

  privacyPolicyPage: {
    title: 'Privacy Policy',
    backLabel: 'Back to homepage',

    responsible: {
      title: '1. Controller',
      intro: 'The controller responsible for processing personal data on this website is:',
      name: 'Ahmet Balci',
      addressLabel: 'Address:',
      legalNoticeLink: 'see Legal Notice',
      emailLabel: 'Email:',
      emailAddress: 'ahmet_ba@web.de',
    },

    hosting: {
      title: '2. Website Provision',
      paragraph:
        'When you access this website, the hosting provider processes technically necessary data, such as your IP address, the time of access, the requested page and browser information. This processing is necessary to provide the website securely and without errors and is based on Article 6(1)(f) GDPR. The data is deleted as soon as it is no longer required for this purpose.',
    },

    contactForm: {
      title: '3. Contact Form',
      paragraph:
        'When you use the contact form, your name, email address and message are processed. The data is used only to handle your request and may be processed by the hosting and email providers. The legal basis is Article 6(1)(b) GDPR for contract-related requests and Article 6(1)(f) GDPR for general requests. The data is deleted once the request has been completed, unless statutory retention obligations apply.',
    },

    languageStorage: {
      title: '4. Language Setting',
      paragraph:
        "The selected language is stored in your browser's local storage under the name “app_lang”. This is used only to retain your language preference. No analytics or advertising cookies are used. You can delete the stored setting at any time through your browser.",
    },

    fonts: {
      title: '5. Fonts',
      paragraph:
        'The “Poppins” font used on this website is hosted locally. No connection to Google Fonts is established when the font is loaded.',
    },

    rights: {
      title: '6. Your Rights',
      paragraph:
        'Subject to the applicable legal requirements, you have the right to access, correct, delete or restrict the processing of your data, as well as the right to data portability and to object to processing. You may also lodge a complaint with a competent data protection supervisory authority. For privacy-related questions, you can use the email address stated above.',
    },

    status: {
      label: 'Last updated',
      date: 'July 2026',
    },
  },

  footer: {
    legalNotice: 'Legal notice',
    privacyPolicy: 'Privacy policy',
  },
};
