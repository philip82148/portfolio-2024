import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useRouteLoaderData } from "@remix-run/react";

import type { Language } from "./language";
import { isLanguage } from "./language";

import type { loader as rootLoader } from "~/root";

export const getLangOrThrow404Response = (
  params: LoaderFunctionArgs["params"],
  request: LoaderFunctionArgs["request"]
): Language => {
  if (params.lang) {
    if (isLanguage(params.lang)) return params.lang;
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
  return request.headers.get("Accept-Language")?.split(",").filter(isLanguage)?.[0] ?? "ja";
};

export const useLang = (): Language => {
  return useRouteLoaderData<typeof rootLoader>("root")?.lang ?? "ja";
};
