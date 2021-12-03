/* eslint-disable react/require-default-props */
import { ReactNode } from "react";
import * as React from "react";
import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch, useLocation } from "remix";
import type { LinksFunction } from "remix";

import modernNormalizeStylesUrl from "./styles/modern-normalize.css";
import globalStylesUrl from "./styles/global.css";
import tailwindStylesUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: modernNormalizeStylesUrl,
  },
  { rel: "stylesheet", href: tailwindStylesUrl },
  { rel: "stylesheet", href: globalStylesUrl },
];

function Document({ children, title = null }: { children: ReactNode; title?: string | null }) {
  return (
    <html lang="en">
      <head>
        {/* Common HEAD Markup */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>

        {/* Control the behavior of search engine crawling and indexing */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />

        {/* Prefetching and preconnecting */}
        <link rel="dns-prefetch" href="https://pienaar.sirv.com" />
        <link rel="dns-prefetch" href="https://scripts.sirv.com" />
        <link rel="dns-prefetch" href="https://polyfill.io" />
        <link rel="preconnect" href="https://scripts.sirv.com" />
        <link rel="preconnect" href="https://pienaar.sirv.com" />
        <link rel="preconnect" href="https://polyfill.io" />

        {/* Fonts */}
        <link rel="preload" as="font" href="/fonts/Manrope-Bold.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-ExtraBold.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="font"
          href="/fonts/Manrope-ExtraLight.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" as="font" href="/fonts/Manrope-Light.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-Medium.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-Regular.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-SemiBold.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-Bold.woff" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-ExtraBold.woff" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-ExtraLight.woff" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-Light.woff" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-Medium.woff" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-Regular.woff" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-SemiBold.woff" type="font/woff" crossOrigin="anonymous" />

        {/* 3rd Party Scripts */}
        <script crossOrigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js" />
        <script crossOrigin="anonymous" src="https://scripts.sirv.com/sirv.js" />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>;
      break;
    case 404:
      message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      {message}
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>Hey, developer, you should replace this with what you want your users to see.</p>
      </div>
    </Document>
  );
}

const RouteChangeAnnouncement = React.memo(() => {
  let [hydrated, setHydrated] = React.useState(false);
  let [innerHtml, setInnerHtml] = React.useState("");
  let location = useLocation();

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  let firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    // Skip the first render because we don't want an announcement on the
    // initial page load.
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);

  // Render nothing on the server. The live region provides no value unless
  // scripts are loaded and the browser takes over normal routing.
  if (!hydrated) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      aria-atomic
      id="route-change-region"
      style={{
        border: "0",
        clipPath: "inset(100%)",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal",
      }}
    >
      {innerHtml}
    </div>
  );
});
