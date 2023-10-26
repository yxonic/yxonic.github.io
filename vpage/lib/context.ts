// `usePageContext` allows us to access `pageContext` in any Vue component.
// See https://vike.dev/pageContext-anywhere

import type {
  PageContextBuiltInClientWithServerRouting,
  PageContextBuiltInClientWithClientRouting,
} from "vike/types";
import { inject } from "vue";
import type { App, ComponentPublicInstance, InjectionKey } from "vue";

type Page = ComponentPublicInstance;
type PageProps = {};
type PageExports = {
  title?: string;
  description?: string;
  giscus?: boolean;
};

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: PageExports;
    frontmatter?: PageExports;
  };
};

export type PageContextServer =
  PageContextBuiltInClientWithServerRouting<Page> & PageContextCustom;
export type PageContextClient =
  PageContextBuiltInClientWithClientRouting<Page> & PageContextCustom;
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
