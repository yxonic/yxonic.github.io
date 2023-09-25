// `usePageContext` allows us to access `pageContext` in any Vue component.
// See https://vike.dev/pageContext-anywhere

import type { PageContextBuiltIn, PageContextBuiltInClient } from "vike";
import { inject } from "vue";
import type { App, ComponentPublicInstance, InjectionKey } from "vue";

type Page = ComponentPublicInstance;
type PageProps = {};

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
    frontmatter?: {
      title?: string;
      description?: string;
    };
  };
};

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> &
  PageContextCustom;
export type PageContext = PageContextClient | PageContextServer;

const key: InjectionKey<PageContext> = Symbol();

export function usePageContext() {
  const pageContext = inject(key);
  if (!pageContext) throw new Error("setPageContext() not called in parent");
  return pageContext;
}

export function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext);
}
