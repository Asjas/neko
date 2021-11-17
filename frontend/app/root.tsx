/* eslint-disable react/require-default-props */
import { ReactNode } from "react";
import { Meta, Links, Scripts, LiveReload, useCatch, Outlet } from "remix";
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

        {/* Fonts */}
        <link rel="preload" as="font" href="/fonts/Manrope-Bold.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-ExtraBold.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Manrope-ExtraLight.woff2" type="font/woff2" crossOrigin="anonymous" />
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
        <Meta />
        <Links />
      </head>
      <body>
        {children}
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
  const caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      );

    default:
      throw new Error(`Unexpected caught response with status: ${caught.status}`);
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>Replace this UI with what you want users to see when your app throws uncaught errors.</p>
    </Document>
  );
}
