import { deTranslation } from './languages/de.translation';
import { enTranslation } from './languages/en.translation';
import type { LangCode, TranslationModel } from './translation.model';

export type { LangCode, TranslationModel } from './translation.model';

/** Maps each supported language code to its complete translation set. */
export const translations: Record<LangCode, TranslationModel> = {
  de: deTranslation,
  en: enTranslation,
};
