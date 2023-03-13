// `usePageContext` allows us to access `pageContext` in any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { inject } from 'vue'
import type { App, InjectionKey,ComponentPublicInstance } from 'vue'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'

type Page = ComponentPublicInstance
type PageProps = {}

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    },
    frontmatter?: {
      title?: string
      description?: string
    },
  }
}

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom
export type PageContext = PageContextClient | PageContextServer

const key: InjectionKey<PageContext> = Symbol()

export function usePageContext() {
  const pageContext = inject(key)
  if (!pageContext) throw new Error('setPageContext() not called in parent')
  return pageContext
}

export function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext)
}
