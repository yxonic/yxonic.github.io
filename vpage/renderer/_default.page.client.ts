import { createApp } from '../lib/app'
import type { PageContext } from '../lib/context'

import 'uno.css'
import 'katex/dist/katex.css'
import './global.css'

function render(pageContext: PageContext) {
  const app = createApp(pageContext)
  app.mount('#app')
}

export { render }
