import type { EventContext } from "@cloudflare/workers-types";

import { SvgCache } from "~/api/cache";

export const onRequestGet = async (context: EventContext<Env, "key", void>): Promise<Response> => {
  const {
    params: { key },
  } = context;
  const cache = new SvgCache(context.env);

  const content = await cache.get(key as string);

  if (!content) return new Response(null, { status: 404 });

  return new Response(content, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
};
