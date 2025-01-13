import type { LoaderFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/react";

import { isLanguage } from "~/multilingual";

export const loader: LoaderFunction = ({ request }) => {
  const lang =
    request.headers
      .get("Accept-Language")
      ?.split(/[^a-z]+/)
      .filter(isLanguage)?.[0] ?? "ja";
  return redirect(`/${lang}`);
};
