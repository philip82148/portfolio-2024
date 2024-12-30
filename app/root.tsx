import type { LinksFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import "./tailwind.css";
import { Footer, Header } from "./components/layout";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap",
  },
  { rel: "icon", href: "favicon.ico" },
  { rel: "apple-touch-icon", href: "apple-touch-icon.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
              Go back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
