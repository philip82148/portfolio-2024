import { SvgCache } from "~/api/services/stat/SvgCache";

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const {
    params: { key },
  } = context;
  const svgCache = new SvgCache(context.env);
  const content = await svgCache.get(key as string);
  return new Response(
    content,
    content
      ? {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
          },
        }
      : { status: 404 }
  );
};
