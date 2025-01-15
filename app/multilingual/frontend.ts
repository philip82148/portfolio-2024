import type { Params } from "@remix-run/react";
import { useParams } from "@remix-run/react";

import type { Language } from "./language";
import { isLanguage } from "./language";

export const getLangOrThrow404Response = (params: Params<string>): Language => {
  const paramLang = params.lang;
  if (paramLang) {
    if (isLanguage(paramLang)) return paramLang;
    throw new Response("Not Found", { status: 404 });
  }
  return "ja";
};

export const useLang = (): Language => {
  const { lang } = useParams();
  return lang && isLanguage(lang) ? lang : "ja";
};

export const toLink = (lang: Language): string => (lang === "ja" ? "/" : `/${lang}/`);
