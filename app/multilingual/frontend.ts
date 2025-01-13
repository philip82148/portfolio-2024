import type { Params } from "@remix-run/react";
import { useRouteLoaderData } from "@remix-run/react";

import type { Language } from "./language";
import { isLanguage } from "./language";

import type { loader as rootLoader } from "~/root";

export const getLangOrThrow404Response = (request: Request, params: Params<string>): Language => {
  const paramLang = params.lang;
  if (paramLang) {
    if (isLanguage(paramLang)) return paramLang;
    throw new Response("Not Found", { status: 404 });
  }

  return (
    request.headers
      .get("Accept-Language")
      ?.split(/[^a-z]+/)
      .filter(isLanguage)?.[0] ?? "ja"
  );
};

export const useLang = (): Language => {
  return useRouteLoaderData<typeof rootLoader>("root")?.lang ?? "ja";
};
