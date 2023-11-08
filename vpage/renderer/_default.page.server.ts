import { renderToString } from "@vue/server-renderer";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { createApp } from "../lib/app";
import type { PageContextServer } from "../lib/context";

export { render };
// See https://vike.dev/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

async function render(pageContext: PageContextServer) {
  const app = createApp(pageContext);
  const appHtml = await renderToString(app);

  // See https://vike.dev/head
  const { documentProps, frontmatter } = pageContext.exports;
  const title = documentProps?.title || frontmatter?.title || "VPages App";
  const desc =
    documentProps?.description ||
    frontmatter?.description ||
    "App using VPages";

  const giscusScript =
    documentProps?.giscus || frontmatter?.giscus
      ? `<script src="https://giscus.app/client.js"
  data-repo="yxonic/yxonic.github.io"
  data-repo-id="R_kgDOJJCXNQ"
  data-category="Page Discussion"
  data-category-id="DIC_kwDOJJCXNc4Cacuq"
  data-mapping="pathname"
  data-strict="1"
  data-reactions-enabled="0"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="light"
  data-lang="en"
  crossorigin="anonymous"
  async>
</script>`
      : "";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title} | @yxonic</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>

        ${dangerouslySkipEscape(giscusScript)}
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
}
