import ReactDOMServer from "react-dom/server";
import type { EntryContext } from "remix";
import { RemixServer } from "remix";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  let markup = ReactDOMServer.renderToString(<RemixServer context={remixContext} url={request.url} />);

  if (process.env.NODE_ENV !== "production") {
    responseHeaders.set("Cache-Control", "no-store");
  }

  const html = `<!DOCTYPE html>${markup}`;

  responseHeaders.set("X-Powered-By", "PHP/3.0.18");
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Content-Length", String(Buffer.byteLength(html)));

  return new Response(html, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
