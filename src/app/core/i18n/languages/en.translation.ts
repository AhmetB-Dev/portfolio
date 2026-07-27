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
    role: 'FRONTEND DEVELOPER',
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
    sendingButton: 'Sending ...',
    goUpLabel: 'Go up',
    successLabel: 'Message sent',
    successTitle: 'Thank you!',
    successMessage: 'Thank you! I will get back to you as soon as possible.',
    errorLabel: 'Message could not be sent',
    errorTitle: 'That did not work',
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
      address: '[Address of the Portfolio operator]',
      postcodeCity: '[Postcode and city]',
      contactTitle: 'Exploring the Board',
      emailLabel: 'Ahmet_ba@web.de',
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
      betweenAcademyAndProduct: ', we, the listed students, retain all proprietary rights in',
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
      thirdBeforeProduct: 'You are solely responsible for your interactions with other users of',
    },

    disclaimer: {
      title: 'Disclaimer of warranties and limitation of liability',
      firstAfterProduct:
        'is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      secondBeforeAcademy: 'In no event will we, the listed students, or the',
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
      contactBeforeEmail: 'For any questions or notices, please contact us at',
      contactEmail: 'Ahmet_ba@web.de',
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
};
