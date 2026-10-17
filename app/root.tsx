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

const GA_TRACKING_ID = "G-1YSBEG33K6";

export const links: LinksFunction = () => [{ rel: "icon", href: "/favicon.ico" }];

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
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                send_page_view: false // 初回ロードとuseEffectでの二重送信を防ぐ場合
              });
            `,
          }}
        />
      </head>
      <body className="bg-inherit">
        {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
        {children}
        <ScrollRestoration />
        <Scripts />
        <script defer src="https://sassan.dev/d/js.js" />
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
