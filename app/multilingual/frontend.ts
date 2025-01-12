import { useParams } from "@remix-run/react";

import type { Language } from "./language";
import { isLanguage } from "./language";

export const useLang = (): Language => {
  const lang = useParams<"lang">().lang ?? "";
  return isLanguage(lang) ? lang : "ja";
};
