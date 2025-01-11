export const LANGUAGES = ["ja", "en"] as const;
export type Language = (typeof LANGUAGES)[number];
export const isLanguage = (lang: string): lang is Language => LANGUAGES.includes(lang as Language);
