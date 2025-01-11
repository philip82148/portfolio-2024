import { config } from "@fortawesome/fontawesome-svg-core";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import {
  isRouteErrorResponse,
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import { Footer, Header } from "./components/layout";
import { getLangOrThrow404Response } from "./multilingual";

import "./tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
];

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const lang = getLangOrThrow404Response(params, request);
  return json({ lang });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang={data?.lang ?? "ja"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-inherit">
        {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="grid min-h-screen place-content-center">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold opacity-10 lg:text-7xl xl:text-9xl">Error</h1>
            <p className="mb-5">
              {isRouteErrorResponse(error)
                ? `${error.status} ${error.statusText}`
                : (error as Error | null)?.message ?? "Unknown error"}
            </p>
            <a className="btn btn-outline" href="/">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
