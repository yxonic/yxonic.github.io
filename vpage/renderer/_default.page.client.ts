import PrimeVue from "primevue/config";
import { createApp } from "../lib/app";
import type { PageContext } from "../lib/context";

import "uno.css";
import "katex/dist/katex.css";
import "primevue/resources/themes/viva-light/theme.css";

import "./global.css";

function render(pageContext: PageContext) {
  const app = createApp(pageContext);
  app.use(PrimeVue, { ripple: true });
  app.mount("#app");
}

export { render };
