import type { LoaderFunctionArgs } from "@remix-run/cloudflare";

import type { Language } from "./language";
import { isLanguage } from "./language";

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
