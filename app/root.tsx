import type { LinksFunction } from "@remix-run/cloudflare";
import type { MetaFunction } from "@remix-run/react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import { Footer, Header } from "./components/layout";
import { useLang } from "./multilingual";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Ryota Sasaki" },
    { name: "description", content: "This is Ryota Sasaki's portfolio site." },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  const lang = useLang();
  return (
    <html lang={lang}>
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
        <script defer src="https://dol.philip82148.dev/js/js.js" />
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
