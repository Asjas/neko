import ReactDOMServer from "react-dom/server";
import type { EntryContext } from "remix";
import { RemixServer } from "remix";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const view = ReactDOMServer.renderToString(<RemixServer context={remixContext} url={request.url} />);

  if (process.env.NODE_ENV !== "production") {
    responseHeaders.set("Cache-Control", "no-store");
  }

  const html = `<!DOCTYPE html>${view}`;
  const bytes = new TextEncoder().encode(html);

  responseHeaders.set("X-Powered-By", "PHP/3.0.18");
  responseHeaders.set("Content-Type", "text/html; charset=utf-8");
  responseHeaders.set("Content-Length", String(bytes.length));
  responseHeaders.set("X-NODE-ENV", String(process.env.NODE_ENV));

  return new Response(html, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
