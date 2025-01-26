import { useParams } from "@remix-run/react";

import type { Language } from "./language";
import { isLanguage } from "./language";

export const useLang = (): Language => {
  const { lang } = useParams();
  return lang && isLanguage(lang) ? lang : "ja";
};

export const toLink = (lang: Language): string => (lang === "ja" ? "/" : `/${lang}/`);
