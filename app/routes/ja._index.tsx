import type { LoaderFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  return redirect("/", 301);
};
